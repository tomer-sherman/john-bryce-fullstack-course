import { DataModel } from "../models/data-model";
import { QuestionModel } from "../models/question-model";
import { gptService } from "./gpt-service";
import { ragRetrieval } from "./rag-retrival";

// Logic:
class PromptService {

    // Get all products:
    public async ask(questionForm: QuestionModel): Promise<string> {

        questionForm.validate();

        const chunks = await ragRetrieval.retrieve(questionForm.question, questionForm.topResultsCount);
        if (!chunks) { return "No relevant data in our knowledge-base found!" };

        const systemPrompt = `
        You are a question-answering assistant.
        you MUST follow these rules:
        1.Answer the question ONLY using the provided context.
        2. Do NOT use any prior knowledge or external information.
        3. If the answer is not clearly found supported in the context, Do NOT attempt to guess.
        4.If the answer is not explicity stated or cannot be inferred from the context, say: " I don't know based on the provided information."
        5. Be concise and accurate.
        `;

        const userPrompt = `

        Context
        ${chunks}

        Question
        ${questionForm.question}

        Answer:
        
        `

        const answer = await gptService.getCompletion(systemPrompt, userPrompt);
        return answer;


    }

}

export const promptService = new PromptService();
