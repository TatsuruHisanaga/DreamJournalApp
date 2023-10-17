// services/openAIApiService.ts
import { OpenAI, ClientOptions } from 'openai';

interface ImageResponse {
  data: {
    url: string;
  }[];
}

const options: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY || "YOUR_OPENAI_API_KEY"
};

export const callDallE2API = async (title: string, details: string): Promise<string | null> => {
  try {
    const prompt = `${title}. ${details}`;
    const openai = new OpenAI(options);

    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "512x512"
    }) as unknown as ImageResponse;

    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Error calling DALL-E2 API:", error);
    return null;
  }
};