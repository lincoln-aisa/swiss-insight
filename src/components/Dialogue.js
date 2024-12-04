
import React, { useState, useEffect, useCallback } from 'react';
import "./dialogue.css";

function Dialogue({ userQuestion, onMinimize }) {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [{ sender: "user", text: userQuestion }];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const MAX_QUESTIONS_PER_DAY = 15;

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
      setMessages((prevMessages) => {
        const updatedMessages = [
          ...prevMessages,
          { sender: "bot", text: "You've reached your daily question limit of 10. Please try again tomorrow." }
        ];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
      return;
    }

    setLoading(true);
    try {
      // local server - http://localhost:5000/api/chatbot
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prevMessages) => {
        const updatedMessages = [
          ...prevMessages,
          { sender: "bot", text: data.botMessage }
        ];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages((prevMessages) => {
        const updatedMessages = [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I'm still under development." }
        ];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, { sender: "user", text: input }];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages)); 
        return updatedMessages;
      });
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
