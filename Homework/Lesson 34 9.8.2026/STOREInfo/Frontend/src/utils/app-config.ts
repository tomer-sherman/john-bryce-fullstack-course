class AppConfig {
    public readonly storesUrl = "http://localhost:4000/api/stores";
    public readonly categoryUrl = "http://localhost:4000/api/category";


    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
}

export const appConfig = new AppConfig();
