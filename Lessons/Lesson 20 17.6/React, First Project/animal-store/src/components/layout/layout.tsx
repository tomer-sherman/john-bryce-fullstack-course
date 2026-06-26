import { Copyrights } from "../copyrights/copyright";
import { Header } from "../header/header";
import { Kitten } from "../kitten/kitten";
import { Menu } from "../menu/menu";
import "./layout.css";

export function Layout() {
    return (
        // This className is an invention of react, it exist only in this framework.
        <div className="Layout">
            <header>
                <Header/>
            </header>
            <nav>
                <Menu/>
            </nav>
            <main>
                <Kitten />
            </main>
            <aside>
                4
            </aside>
            <footer>
                <Copyrights />
            </footer>
        </div>

    );
}

