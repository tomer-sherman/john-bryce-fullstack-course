import { MealModel } from "../models/meal-model";
import { NutritionModel } from "../models/nutrition-model";
import { jsonSanitizer } from "../utils/json-sanitizer";
import { gptService } from "./gpt-service";

class PromptsService {
    public async getAiNutrition(formData: NutritionModel): Promise<MealModel[]> {
        const systemPrompt = "You are an expert nutritionist and coach";

        const userPrompt = `
        
        This is my stats:
        My age: ${formData.age},
        My height in cm: ${formData.height},
        My weight in kg: ${formData.weight},
        My body fat percentage: ${formData.fPercentage},
        My daily job is: ${formData.jobActivity},
        My workout for today is  ( ${formData.workout} ) <= If this block is empty its a rest day,
        My nutrition type: ${formData.nType},
        My nutrition fitness goal ${formData.goal}

        Return me back a JSON array that contains the today's meal
        i need too consume, send me 3 meals.
        The following JSON format MUST be the following:

        [
        {"mealType" : "breakfast" ,"mealDesc": "the meal description", "macroDesc": {"calories": number of calories needed too eat, "protein": number in grams, "carbs": number in grams, "fats": number in grams}},
        {"mealType" : "lunch", "mealDesc": "the meal description", "macroDesc": {"calories": number of calories needed too eat, "protein": number in grams, "carbs": number in grams, "fats": number in grams}},
        {"mealType" : "dinner", "mealDesc": "the meal description", "macroDesc": {"calories": number of calories needed too eat, "protein": number in grams, "carbs": number in grams, "fats": number in grams}}
        ]

        don't replay in anything else just the JSON above.
        `
        const completion = await gptService.getCompletion(systemPrompt, userPrompt);
        const mealPlan = jsonSanitizer.sanitize(completion);

        return mealPlan;


    }
}

export const promptsService = new PromptsService();
