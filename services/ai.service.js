import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const groq = new Groq({
  apiKey: process.env.GROQ_KEY || 'default_api_key' // Provide a default value or handle the error
});
export const askAI = async (prompt) => {
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "user", content: prompt }
    ],
    temperature: 0.3
  });

  return completion.choices[0].message.content;
};
