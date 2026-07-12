import { NavLink } from "react-router-dom";
import "./nav-menu.css";
import { SupplierCount } from "../../shared-area/supplier-count/supplier-count";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/app-state";
import { UserModel } from "../../../models/user-model";
import { Role } from "../../../utils/enum";

export function NavMenu() {

    const user = useSelector<AppState, UserModel>(state => state.user);


    return (
        <div className="NavMenu">

            <NavLink to="/suppliers">Suppliers</NavLink>
            {user?.role === Role.Admin && <NavLink to="/add-supplier">Add supplier</NavLink>}

            <SupplierCount />
            
        </div>
    );
}
