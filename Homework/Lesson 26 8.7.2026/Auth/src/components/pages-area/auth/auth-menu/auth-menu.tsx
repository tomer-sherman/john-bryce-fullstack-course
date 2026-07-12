import { NavLink, useNavigate } from "react-router-dom";
import "./auth-menu.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/app-state";
import { UserModel } from "../../../../models/user-model";
import { userService } from "../../../../services/user-service";

export function AuthMenu() {
    const user = useSelector<AppState, UserModel>(state => state.user);
    const navigate = useNavigate();

    function signOut() {
        userService.logout();
        navigate("/suppliers")
    }


    return (
        <div className="AuthMenu">

            {!user &&<div>
                <span>Hello guest |</span>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
            </div>}


            {user && <div>
                <span>Hello {user.firstName} {user.lastName} |</span>
                <button onClick={signOut} >Sign Out</button>
            </div>}



        </div>
    );
}
