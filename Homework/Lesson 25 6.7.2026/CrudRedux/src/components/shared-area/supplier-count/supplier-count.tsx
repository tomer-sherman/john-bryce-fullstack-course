import { useSelector } from "react-redux";
import "./supplier-count.css";
import { AppState } from "../../../redux/app-state";

export function SupplierCount() {

    const count = useSelector<AppState, number>(state => state.suppliers.length);

    return (
        <div className="SupplierCount">

			<p>Suppliers count: {count}</p>

        </div>
    );
}
