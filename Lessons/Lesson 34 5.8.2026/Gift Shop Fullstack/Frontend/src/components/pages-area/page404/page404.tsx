import { Link } from "react-router-dom";
import "./page404.css";

export function Page404() {
    return (
        <div className="Page404">

            <span className="code">404</span>
            <p>This page wandered off.</p>
            <Link to="/home" className="btn-primary">Back to Home</Link>

        </div>
    );
}
