
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log("Request method:", req.method); // Log the request method
  if (req.method === 'POST') {
    const { message } = req.body;
    console.log("Received message:", message); // Log the received message

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-4o",
        messages: [{ role: "user", content: message }],
      });

      const botMessage = response.data.choices[0].message.content;
      res.setHeader("Cache-Control", "no-store");
      res.status(200).json({ botMessage });
    } catch (error) {
      console.error("Error connecting to OpenAI API:", error);
      res.status(500).json({ error: "Failed to connect to OpenAI API" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
