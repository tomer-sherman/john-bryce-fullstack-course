/*
    This file talks to the OpenAI chat API. It takes a system prompt and a user
    prompt, sends them to the model with the api key from the app config, and
    returns the text the model answered with. The rest of the app uses it instead
    of calling the API directly.
*/


import { appConfig } from "../utils/app-config";
import OpenAi from "openai";

class GptService {

    private openai = new OpenAi({
        apiKey: appConfig.openaiApiKey,
        dangerouslyAllowBrowser: true

    })

    // Sends the prompts and returns the answer
    public async getCompletion(userPrompt: string): Promise<string> {
        const body: OpenAi.Responses.ResponseCreateParams = {
            "model": "gpt-5",
            "input": userPrompt,
            "tools": [
                {
                    type: "mcp",
                    server_label: "northwind",
                    server_description: "Northwind Traders MCP server.",
                    require_approval: "never",
                    server_url: appConfig.mspServerUrl
                }
            ]
        }



        const response = await this.openai.responses.create(body);
        const completion = response.output_text;

        return completion;
    }




}

export const gptService = new GptService();
