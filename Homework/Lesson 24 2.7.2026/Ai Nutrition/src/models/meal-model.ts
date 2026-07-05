import { MealType } from "./n-type";

export type MealModel = {

    mealType: MealType;
    mealDesc: string;
    macroDesc: {
        "calories": number,
        "protein": number,
        "carbs": number,
        "fats": number
    }

    
}
