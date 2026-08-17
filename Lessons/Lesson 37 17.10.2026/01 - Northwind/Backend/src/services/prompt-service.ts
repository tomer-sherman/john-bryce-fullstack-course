import { ragController } from "../controllers/rag-controller";
import { gptService } from "./gpt-service";
import { ragRetrieval } from "../ai/rag-retrival";


class PromptService {


    public async ask(question: string, topResultsCount: number): Promise<string> {

        //Retrive chunks
        const chunks = await ragRetrieval.retrieve(question, topResultsCount);
        if (!chunks) { return "No related data in our knowledge-base found" }


        const systemPrompt = ` 
        You are a question-answering assistant.
        you MUST follow these rules:
        1. Answer the question ONLY using the provided context.
        2. Do NOT use any prior knowledge or external information
        3. If the answer is not clearly found supported in the context, Do NOT attempt to guess.
        4. If the answer is not explicitly stated or cannot be inferred from the context, say: " I don't know based on the provided information."
        5. Be concise and accurate.
        `;

        const userPrompt = `

        Context 
        ${chunks}

        Question 
        ${question}
        
        Answer:


        `;


        const answer = await gptService.getCompletion(systemPrompt, userPrompt);
        return answer;
    }



}

export const promptService = new PromptService()