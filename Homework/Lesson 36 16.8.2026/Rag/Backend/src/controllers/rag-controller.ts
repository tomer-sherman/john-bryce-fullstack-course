import express, { Request, Response, Router } from "express";
import { promptService } from "../services/prompt-service";
import { QuestionModel } from "../models/question-model";

// Contains routes, without logic.
class RagController {

    // Create a router object which can listen on routes:
    public router: Router = express.Router();

    // Constructor - register routes:
    public constructor() {
        this.router.post("/api/ask", this.getCompletion);
    }

    // Get completion: 
    private async getCompletion(request: Request, response: Response): Promise<void> {

       const questionForm = new QuestionModel(request.body);

        const completion = await promptService.ask(questionForm);

        response.json(completion);


    }

}

export const ragController = new RagController();
