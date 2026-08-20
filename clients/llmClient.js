import { ENV } from "../config/env.js";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: ENV.apiKey
});

export async function sendPrompt(prompt) {

    const response = await client.responses.create({
    model: ENV.model,
    input: prompt
});
 return response.output_text;

}