import dotenv from "dotenv"; // npm install dotenv

// Loads .env values into: process.env object:
dotenv.config({ quiet: true });

class AppConfig {

    public readonly environment = process.env.ENVIRONMENT!;
    public readonly isDevelopment = this.environment === "development";
    public readonly isProduction = this.environment === "production";

    public readonly port = 4000;
    public readonly openaiKey = process.env.OPENAI_API_KEY!;
    public readonly openaiModel = "gpt-4o-mini";
    public readonly openaiUrl = "https://api.openai.com/v1/chat/completions";

}

export const appConfig = new AppConfig();
