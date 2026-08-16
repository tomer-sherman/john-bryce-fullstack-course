class AppConfig {

	// Backend base address (Backend/src/utils/app-config.ts -> port = 4000):
	private readonly baseUrl = "http://localhost:4000/api/";

	// Products - products-controller.ts:
	// GET    /api/products                -> productsUrl
	// GET    /api/products/:id            -> productsUrl + id
	// POST   /api/products                -> productsUrl
	// PUT    /api/products/:id            -> productsUrl + id
	// DELETE /api/products/:id            -> productsUrl + id
	public readonly productsUrl = this.baseUrl + "products/";

	// GET    /api/products/category/:id   -> productsByCategoryUrl + categoryId
	public readonly productsByCategoryUrl = this.baseUrl + "products/category/";

	// Categories - category-controller.ts:
	// GET    /api/category                -> categoriesUrl
	public readonly categoriesUrl = this.baseUrl + "category/";

	
}

export const appConfig = new AppConfig();
