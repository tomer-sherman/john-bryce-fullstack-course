import { Header } from "../header/header";
import { NavMenu } from "../nav-menu/nav-menu";
import { Router } from "../router/router";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

			<header><Header/></header>

            <nav><NavMenu/></nav>
            
            <main><Router/></main>

        </div>
    );
}
