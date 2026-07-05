import axios from "axios";
import { appConfig } from "../utils/app-config";

class GptService {
    // A SINGLE COMPLETION, NOT A CHAT
    public async getCompletion(systemPrompt: string, userPrompt: string): Promise<string> {

        // Too get all this structure simply ask the AI itself how too use its api,
        const body = {
            model: appConfig.openaiModel,
            messages: [
                {role: "system", content: systemPrompt},
                {role: "user", content: userPrompt}
            ]

        };

        const options = {
            headers: {
                authorization: "Bearer " + appConfig.openaiApiKey 
            }
        };

        const response = await axios.post(appConfig.openaiUrl, body, options); 


        const completion = response.data.choices[0].message.content;

        return completion; 
    }
}

export const gptService = new GptService();
