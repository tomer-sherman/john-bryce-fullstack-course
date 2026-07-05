import { Header } from "../header/header";
import { NutritionForm } from "../nutrition-form/nutrition-form";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

            <header><Header/></header>
            <main><NutritionForm/></main>

        </div>
    );
}
