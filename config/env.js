import dotenv from 'dotenv';
dotenv.config();


export const ENV = {

    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL

    
};