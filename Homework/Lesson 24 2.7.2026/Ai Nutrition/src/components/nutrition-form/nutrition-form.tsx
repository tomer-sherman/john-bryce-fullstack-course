import { useForm } from "react-hook-form";
import "./nutrition-form.css";
import { NutritionModel } from "../../models/nutrition-model";
import { useState } from "react";
import { MealModel } from "../../models/meal-model";
import { promptsService } from "../../services/prompts-service";
import { MealCard } from "../meal-card/meal-card";
import { Spinner } from "../spinner/spinner";

export function NutritionForm() {
    const { register, handleSubmit } = useForm<NutritionModel>();
    const [dailyPlan, setDailyPlan] = useState<MealModel[]>();
    const [loading, setLoading] = useState<boolean>(false);

    async function send(formData: NutritionModel) {
        try {
            setLoading(true);
            setDailyPlan([]);
            const dailyPlan = await promptsService.getAiNutrition(formData);
            setDailyPlan(dailyPlan);
        } catch (err: any) {
            alert(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="NutritionForm">

            
            <form onSubmit={handleSubmit(send)}>

                <label>Age:</label>
                <input type="number" required max={100} min={1} step={1} {...register("age")} />

                <label>Height in centimeters:</label>
                <input type="number" required max={300} min={40} {...register("height")} />

                <label>Weight in kilograms:</label>
                <input type="number" required max={300} min={20} {...register("weight")} />

                <label>Body fat percentage:</label>
                <input type="number" min={0.1} step={0.1} max={60} required {...register("fPercentage")} />

                <label>Your job activity level:</label>
                <select defaultValue="" required {...register("jobActivity")}>
                    <option disabled value="">Select one...</option>
                    <option value="sedentary">Sedentary (Desk job, sitting mostly)</option>
                    <option value="Lightly Active">Lightly Active (On feet, standing mostly)</option>
                    <option value="Moderately Active">Moderately Active (Walking, moving all day)</option>
                    <option value="Highly Active">Highly Active (Heavy labor, lifting constantly)</option>
                </select>

                <label>You're planed workout for today:</label>
                <span>Describe it freely, The more details you give the better the answer.</span>
                <input type="string" minLength={2} maxLength={500} {...register("workout")} />


                <label>You're nutrition type:</label>
                <select defaultValue="" required {...register("nType")}>
                    <option disabled value="">Select one...</option>
                    <option>Regular</option>
                    <option>Vegan</option>
                    <option>Vegetarian</option>
                    <option>Keto</option>
                </select>

                <label>Your nutrition goal:</label>
                <select defaultValue="" required {...register("goal")}>
                    <option disabled value="">Select one...</option>
                    <option value="Cut 300 caloric deficit">Cut (Lose fat, lean down)</option>
                    <option value="Bulk 300 caloric surplus">Bulk (Gain muscle, build mass)</option>
                    <option value="Maintain">Maintain (Keep current weight, stay steady)</option>
                </select>



                <button>Get AI daily meal plan</button>
            </form>

            <hr />
            {loading && <Spinner />}
            {dailyPlan?.map((item, index) => <MealCard key={index} mealPlan={item} />)}



        </div>
    );
}
