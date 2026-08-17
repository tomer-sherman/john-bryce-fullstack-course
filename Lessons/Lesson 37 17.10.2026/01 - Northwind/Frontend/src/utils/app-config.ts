class AppConfig {
	public readonly productsUrl = "http://localhost:4000/api/products";
	public readonly employeesUrl = "http://localhost:4000/api/employees";
    public readonly registerUrl = "http://localhost:4000/api/register";
    public readonly loginUrl = "http://localhost:4000/api/login";
	public readonly topProductsUrl = "http://localhost:4000/api/products/top-three";

    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    public readonly openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
    public readonly mspServerUrl = "https://timothy-sulfate-hatbox.ngrok-free.dev/sse";
    public readonly openaiUrl = "https://api.openai.com/v1/responses";

    public readonly serverUrl = "http://localhost:4000";
}

export const appConfig = new AppConfig();
