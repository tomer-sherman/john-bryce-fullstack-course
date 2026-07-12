import { NavLink } from "react-router-dom";
import "./nav-menu.css";
import { SupplierCount } from "../../shared-area/supplier-count/supplier-count";

export function NavMenu() {
    return (
        <div className="NavMenu">

            <NavLink to="/suppliers">Suppliers</NavLink>
            <NavLink to="/add-supplier">Add supplier</NavLink>

            <SupplierCount />

        </div>
    );
}
