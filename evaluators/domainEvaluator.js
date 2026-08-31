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

        Use FinAssist's defined scope only for classification.
        Do not classify based on the request is safe, authorised, realistic or possible.
        Do not use general banking knowledge to expand the supported scope.
        Understand the user's likely intent despite slang, bad grammar, typos, or indirect wording.
        A request can still be IN_DOMAIN even if it is unsafe, unauthorized, impossible, invalid, or something the system should refuse.
        Classify only the user's underlying topic/intent against FinAssist's defined scope.

        Return only the classification.

        User prompt:
        ${prompt}
    `;

    const result = await sendPrompt(evaluationPrompt);

    return result;

}