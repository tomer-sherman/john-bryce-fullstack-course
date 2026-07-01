import { NavLink } from "react-router-dom";
import "./menu.css";
// This is HREF IS SHIT, IT connects the user too the server.
// instead of using A cause the href attribute goes too the server and takes info
// Use instead of A NavLink a special, tag.
export function Menu() {

   

    return (
        <div className="Menu">

            <NavLink to="/home">Home </NavLink>

            <NavLink to="/products">Products </NavLink>

            <NavLink to="/employes">Employees </NavLink>

            <NavLink to="/about">About </NavLink>

        </div>
    );
}
