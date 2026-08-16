import z from "zod";
import { ClientError } from "./client-error";
import { StatusCode } from "./enums";

// Question Schema:
const QuestionSchema = z.object({
    question: z.string().trim().min(2).max(1000),
    topResultsCount: z.number().int().min(3).max(7),
});

// Question Interface (I = Interface):
type IQuestionModel = z.infer<typeof QuestionSchema>;

// Question Model:
export class QuestionModel implements IQuestionModel {

    public question: string;
    public topResultsCount: number;

    public constructor(Question: QuestionModel) { // Copy Constructor
        this.question = Question.question;
        this.topResultsCount = Question.topResultsCount;
    }

    public validate(): void {
        const result = QuestionSchema.safeParse(this);
        if (!result.success) {
            const message = result.error.issues[0].path + ": " + result.error.issues[0].message;
            throw new ClientError(StatusCode.UnprocessableContent, message);
        }
    }

}
