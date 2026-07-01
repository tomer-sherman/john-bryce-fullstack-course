import { InterviewModel } from "../models/interview-model";
import { QnaModal } from "../models/qna-modal";
import { jsonSatnitizer } from "../utils/json-satnitizer";
import { gptService } from "./gpt-service";

class PromptsService {
	public async getQna(interview: InterviewModel):Promise<QnaModal[]>{
        const systemPrompt = "You are an expert in programming development in an dev interview";

        const userPrompt = `
        Write me ${interview.count} Job interview questions and answers
        in a ${interview.level} difficulty level,
        in the field of ${interview.tech} programming technology.

        return back a JSON array containing the questions and answers.
        The JSON format MUST be the following:

        [
        {"q": question1, "a": answer1},
        {"q": question2, "a": answer2} 
        {"q": question3, "a": answer3} 
        ...
        ]

        don't replay with anything else just the above JSON.
        `;

        const completion = await gptService.getCompletion(systemPrompt, userPrompt);
        const qna = jsonSatnitizer.sanitize(completion);

        return qna;
    }
}

export const promptsService = new PromptsService();
