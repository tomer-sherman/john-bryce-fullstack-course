import { Header } from "../header/header";
import { NavMenu } from "../nav-menu/nav-menu";
import { Routing } from "../routing/routing";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

            <header><Header /></header>
            <nav><NavMenu /></nav>
            <main><Routing /></main>



        </div>
    );
}
