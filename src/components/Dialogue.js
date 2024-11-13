import React, { useState, useEffect, useCallback } from 'react';
import "./dialogue.css"

function Dialogue({ userQuestion, onMinimize }) {
  const [messages, setMessages] = useState([{ sender: "user", text: userQuestion }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const MAX_QUESTIONS_PER_DAY = 20;

  const checkQuestionLimit = () => {
    const today = new Date().toISOString().split('T')[0];
    const questionData = JSON.parse(localStorage.getItem("questionData")) || {};

    if (questionData.date !== today) {
      questionData.date = today;
      questionData.count = 0;
      localStorage.setItem("questionData", JSON.stringify(questionData));
    }

    if (questionData.count >= MAX_QUESTIONS_PER_DAY) {
      return false;
    } else {
      questionData.count += 1;
      localStorage.setItem("questionData", JSON.stringify(questionData));
      return true;
    }
  };

  const getBotResponse = useCallback(async (message) => {
    if (!checkQuestionLimit()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "You've reached your daily question limit of 10. Please try again tomorrow." }
      ]);
      return;
    }

    setLoading(true);
    try {
      // local server url: "http://localhost:5000/api/chatbot"
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.botMessage }
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, I'm still under development." }
        // "Sorry, I'm having trouble responding right now."
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      await getBotResponse(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (userQuestion) {
      getBotResponse(userQuestion);
    }
  }, [userQuestion, getBotResponse]);

  return (
    <main className="dialogue-container">
      <div className="dialogue-header">
        <h2>Swiss Insight</h2>
        <button onClick={onMinimize} className="minimize-button">-</button>
      </div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="bot-message">...</div>}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </main>
  );
}

export default Dialogue;