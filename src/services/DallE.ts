// services/DallE.ts
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

interface ImageResponse {
  data: {
    url: string;
  }[];
}

export const callDallE2API = async (title: string, details: string): Promise<string | null> => {
  try {
    const prompt = `${title}. ${details}`;
    const dalleUrl = 'https://api.openai.com/v1/images/generations';

    const response = await axios.post<ImageResponse>(
      dalleUrl,
      {
        prompt: prompt,
        n: 1,
        size: "512x512"
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY || "YOUR_OPENAI_API_KEY"}`
        }
      }
    );

    const imageUrl = response.data.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Error calling DALL-E2 API:", error);
    return null;
  }
};

