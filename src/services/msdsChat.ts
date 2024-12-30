import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const SDS_SYSTEM_PROMPT = `You are an expert SDS (Safety Data Sheet) assistant. Your role is to:
1. Provide detailed safety information about chemicals and compounds
2. Answer questions about handling, storage, and disposal procedures
3. Explain hazard classifications and safety measures
4. Offer emergency response guidance
5. Cite reliable sources when providing information

Always structure your responses clearly with relevant sections like:
- Chemical Properties
- Hazards & Risks
- Safety Measures
- Emergency Procedures
- Storage & Handling
- References

Keep responses accurate, professional, and safety-focused.`;

export const getMSDSResponse = async (message: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Send the message with safety context
    const prompt = `${SDS_SYSTEM_PROMPT}\n\nUser Question: ${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    if (!response.text()) {
      throw new Error('No response generated');
    }
    
    return response.text();
  } catch (error) {
    console.error('Error getting SDS response:', error);
    return 'I apologize, but I am currently experiencing technical difficulties. Please try again later.';
  }
};