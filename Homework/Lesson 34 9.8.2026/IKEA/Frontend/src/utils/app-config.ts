class AppConfig {
	public readonly productUrl = "http://localhost:4000/api/products";

    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
}

export const appConfig = new AppConfig();
