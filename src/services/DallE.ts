// services/DallE.ts
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

interface ImageResponse {
  data: {
    url: string;
  }[];
}

// カスタムエラークラスの定義
class DallEAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DallEAPIError';
  }
}

class UnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnknownError';
  }
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
    if (axios.isAxiosError(error)) {
      console.error("API responded with an error:", error.response?.data);
      throw new DallEAPIError(`API Error: ${error.response?.data}`);
    } else {
      console.error("An unknown error occurred:", error);
      throw new UnknownError("An unknown error occurred");
    }
  }
};

