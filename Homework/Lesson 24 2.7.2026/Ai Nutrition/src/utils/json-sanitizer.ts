import { MealModel } from "../models/meal-model";

class JsonSanitizer {
    public sanitize(text: string): MealModel[] {

        const start = text.indexOf("[");
        const end = text.lastIndexOf("]");
        const json = text.substring(start, end + 1);
        const mealPlan: MealModel[] = JSON.parse(json);
        return mealPlan;

    }
}

export const jsonSanitizer = new JsonSanitizer();
