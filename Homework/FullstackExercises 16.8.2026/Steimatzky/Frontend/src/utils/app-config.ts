class AppConfig {
	public readonly baseUrl = "http://localhost:4000/api/";

	public readonly getAllBooksUrl = this.baseUrl + "books";
	public readonly addBookUrl = this.baseUrl + "books";
	public readonly getAllGenresUrl = this.baseUrl + "genres";
	public readonly deleteBookUrl = this.baseUrl + "books/";

    public readonly recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
}

export const appConfig = new AppConfig();
