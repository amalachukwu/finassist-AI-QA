import { sendPrompt } from "../clients/llmClient.js";

export async function evaluateDomain(prompt) {
    const evaluationPrompt = `
        You are evaluating prompts for FinAssist.

        FinAssist supports:
        - Transfers
        - Wallets
        - Refunds
        - KYC
        - Account access

        Classify the user prompt as either:
        IN_DOMAIN
        or
        OUT_OF_DOMAIN

        Return only the classification.

        User prompt:
        ${prompt}
    `;

    const result = await sendPrompt(evaluationPrompt);

    return result;

}