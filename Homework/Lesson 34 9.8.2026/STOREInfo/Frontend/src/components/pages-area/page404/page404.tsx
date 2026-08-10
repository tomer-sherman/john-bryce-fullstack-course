import { NavLink } from "react-router-dom";
import "./page404.css";

export function Page404() {
    return (
        <div className="Page404">

            <span className="code">404</span>
            <h2>Page not found</h2>
            <p>That route doesn't exist in this app.</p>
            <NavLink to="/home">Back to stores</NavLink>

        </div>
    );
}
