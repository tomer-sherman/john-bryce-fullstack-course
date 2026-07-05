import { MealModel } from "../../models/meal-model";
import "./meal-card.css";

type MealCardProps = {
	mealPlan: MealModel;
};

export function MealCard(props: MealCardProps) {
    return (
        <div className="MealCard">

            <p>{props.mealPlan.mealType}</p>
			<p> Meal: {props.mealPlan.mealDesc}</p>
			<p>Calories :{props.mealPlan.macroDesc.calories}</p>
			<p>Protein :{props.mealPlan.macroDesc.protein}</p>
			<p>Carbs :{props.mealPlan.macroDesc.carbs}</p>
			<p>Fats :{props.mealPlan.macroDesc.fats}</p>

        </div>
    );
}
