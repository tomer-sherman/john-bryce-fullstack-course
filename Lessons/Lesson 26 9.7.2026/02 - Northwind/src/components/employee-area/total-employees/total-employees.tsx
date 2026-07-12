import { useSelector } from "react-redux";
import "./total-employees.css";
import { AppState } from "../../../redux/app-state";

export function TotalEmployees() {

    const count = useSelector<AppState, number>(state => state.employees.length);

    return (

        <div className="TotalEmployees">

			<p>TotalEmployees: {count}</p>

        </div>
    );
}
