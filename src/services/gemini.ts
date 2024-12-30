import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: 'You are a helpful AI assistant. Keep your responses friendly and concise.',
        },
        {
          role: 'model',
          parts: 'Hello! How can I help you?',
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return 'I apologize, but I am currently experiencing technical difficulties. Please try again later.';
  }
};