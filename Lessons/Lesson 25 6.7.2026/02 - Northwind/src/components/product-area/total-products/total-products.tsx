import { useSelector } from "react-redux";
import "./total-products.css";
import { AppState } from "../../../redux/app-state";

export function TotalProducts() {

    // const count = store.getState().products.length; // WONT RENDER
    
    // Will update every time data is changed
    const count = useSelector<AppState, number>(state => state.products.length);
    // A hook function that listens too the global state, Each time it has a change this will render again.



    return (
        <div className="TotalProducts">

			<p>TotalProducts:{count}</p>

        </div>
    );
}
