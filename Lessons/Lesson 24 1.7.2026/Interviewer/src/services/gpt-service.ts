import axios from "axios";
import { appConfig } from "../utils/app-config";

class GptService {
	 // A SINGLE COMPLETION, NOT A CHAT
    public async getCompletion(systemPrompt: string, userPrompt: string):Promise<string>{

        // Too get all this structure simply ask the AI itself how too use its api,
        const body = {
            model: appConfig.openaiModel,
            messages: [
                {role: "system", content: systemPrompt}, // Here sits The systemPrompt, WHAT IS THE EXPERTISE!!!
                {role: "user", content: userPrompt} // THE USER REQUEST.
            ]

        };

        const options = {
            headers:{
                authorization: "Bearer " + appConfig.openaiApiKey // Here sits the api key 
            }
        };

        const response  = await axios.post(appConfig.openaiUrl, body, options); // Here you send, too the specific openAiUrl, in options you send your security api key. with the body.



        const completion = response.data.choices[0].message.content; 
        // Response.data returns a giant object in this promise object the answer lies in THIS SPECIFIC path
        //.choices[0].message.content <--- this will path The specific promise object for the answer that the user gets.

        return completion; // YOU RETURN THE SPECIFIC ANSWER INSIDE THIS GIANT PROMISE COMPLETION OBJECT.
    }


}

export const gptService = new GptService();
