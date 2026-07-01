import { AnimalCards } from "../animal-cards/animal-cards";
import { Animals } from "../animals/animals";
import { Clicker } from "../clicker/clicker";
import { Clock } from "../clock/clock";
import { Copyrights } from "../copyrights/copyright";
import { Employees } from "../employees/employees";
import { Header } from "../header/header";
import { Kitten } from "../kitten/kitten";
import { Menu } from "../menu/menu";
import { Puppy } from "../puppy/puppy";
import "./layout.css";

export function Layout() {
    return (
        // This className is an invention of react, it exist only in this framework.
        <div className="Layout">
            <header>
                <Header />
            </header>
            <nav>
                <Menu />
            </nav>
            <main>
                <Clock/>
                <Kitten />
                <Animals />
                <Puppy/>
                <Clicker/>

                <hr/>
                <AnimalCards/>
                
            </main>
            <aside>
                <Employees/>
            </aside>
            <footer>
                <Copyrights />
            </footer>
        </div>

    );
}

