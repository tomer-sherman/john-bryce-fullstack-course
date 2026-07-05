import { ActivityType, NutritionGoal, NutritionType } from "./n-type";

export type NutritionModel = {

    age: number;
    height: number;
    weight: number;
    fPercentage: number;
    jobActivity: ActivityType;
    workout: string;
    nType: NutritionType;
    goal: NutritionGoal;


}
