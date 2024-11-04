Dialogue.js file

import React, { useState, useEffect } from 'react';
import "./dialogue.css"

function Dialogue({ userQuestion }) {
  const [messages, setMessages] = useState([{ sender: "user", text: userQuestion }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch bot response from API
  const getBotResponse = async (message) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/chatbot", { // Update endpoint
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
        { sender: "bot", text: "Sorry, I'm having trouble responding right now." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      await getBotResponse(input);
      setInput(""); // Clear input field after submission
    }
  };

  // Initial response when component loads
  useEffect(() => {
    if (userQuestion) {
      getBotResponse(userQuestion);
    }
  }, [userQuestion]);

  return (
    <div className="dialogue-container">
      <h2>Chat with Lora</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "bot-message"}
          >
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
    </div>
  );
}

export default Dialogue;

Above is Dialogue.js file

Below is dialogue.css file

.dialogue-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40vw;
  height: 400px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.chat-window {
  padding: 10px;
  flex: 1;
  overflow-y: auto;
}

.user-message, .bot-message {
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  max-width: 95%;
}

.user-message {
  background-color: #d1daeb;
  align-self: flex-end;
}

.bot-message {
  background-color: #538cc6;
  color: white;
  align-self: flex-start;
}

.chat-input-form {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.chat-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.send-button {
  padding: 8px 12px;
  margin-left: 8px;
  background-color: #538cc6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

Above is dialogue.css file

Below is chatbot.js file in the api folder

// src/api/chatbot.js

//apiKey: process.env.OPENAI_API_KEY
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: message }],
      });

      const botMessage = response.data.choices[0].message.content;
      res.status(200).json({ botMessage });
    } catch (error) {
      console.error("Error connecting to OpenAI API:", error);
      res.status(500).json({ error: "Failed to connect to OpenAI API" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

Above is chatbot.js file in the api folder

Below is index.js file in the server folder, it serves as the local backend server

// server/index.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

app.post('/api/chatbot', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.status(200).json({ botMessage });
  } catch (error) {
    console.error('Error connecting to OpenAI API:', error);
    res.status(500).json({ error: 'Failed to connect to OpenAI API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

Above is the index.js file in the server folder