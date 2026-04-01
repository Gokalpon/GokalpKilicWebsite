import { GoogleGenAI } from "@google/genai";

async function getArtStationProjects() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "List the project titles from the ArtStation profile: https://gokalpon.artstation.com/. Provide them as a JSON array of strings.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
    },
  });

  console.log(response.text);
}

getArtStationProjects();
