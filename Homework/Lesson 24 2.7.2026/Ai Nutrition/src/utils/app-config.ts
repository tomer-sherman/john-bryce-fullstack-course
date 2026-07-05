class AppConfig {
    public readonly openaiUrl = "https://api.openai.com/v1/chat/completions";
    public readonly openaiModel = "gpt-4o-mini";
    public readonly openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
}

export const appConfig = new AppConfig();
