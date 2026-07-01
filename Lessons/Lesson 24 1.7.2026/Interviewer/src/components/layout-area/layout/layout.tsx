import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Router } from "../router/router";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

			<nav><Menu/></nav>

            <header><Header/></header>

             <main><Router/></main>   
        </div>
    );
}
