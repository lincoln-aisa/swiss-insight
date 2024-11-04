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
