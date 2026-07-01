class AppConfig {
	public readonly openaiUrl = "https://api.openai.com/v1/chat/completions";
    public readonly openaiModel = "gpt-4o-mini";
    public readonly openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY; // YOU DON'T WANT TOO SHARE THIS INFO, FOR THE WORLD!!!! SINCE PEOPLE COULD USE IT. // ONLY IF YOU USE API KEY JUST FOR URSELF ITS OKEY, TOO PUT HERE IT.
} // YOU HAVE TOO PUT THE ENV FILE IN GIT IGNORE

export const appConfig = new AppConfig();
