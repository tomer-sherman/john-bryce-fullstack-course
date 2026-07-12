import { NavLink, useNavigate } from "react-router-dom";
import "./auth-menu.css";
import { useSelector } from "react-redux";
import { UserModel } from "../../../models/user-model";
import { AppState } from "../../../redux/app-state";
import { userService } from "../../../services/user-service";

export function AuthMenu() {
    const user = useSelector<AppState, UserModel>(state => state.user);
    const navigate = useNavigate();

    function signOut(){
        userService.logout();
        navigate("/home");
    }

    return (


        <div className="AuthMenu">


           {!user && <div >
                <span>Hello Guest |</span>
                <NavLink to="/signup">Sign Up</NavLink>
                <span>|</span>
                <NavLink to="/signin">Sign in</NavLink>
            </div>}

           {user && <div>

                <span>Hello {user.firstName} {user.lastName} |</span>
                <button onClick={signOut}>Sign out</button>

            </div>}

        </div>
    );
}
