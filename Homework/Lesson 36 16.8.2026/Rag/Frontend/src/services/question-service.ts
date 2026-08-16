import axios from "axios";
import { QuestionModel } from "../models/question-model";
import { appConfig } from "../utils/app-config";

class QuestionService {

    // Send the question to the backend, get the AI completion back:
    public async ask(question: QuestionModel): Promise<string> {
        const response = await axios.post<string>(appConfig.askUrl, question);
        return response.data;
    }

}

export const questionService = new QuestionService();
