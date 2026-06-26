import { GiftList } from "../gift-list/gift-list";
import { Header } from "../header/header";
import "./layout.css";

export function Layout() {
    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <GiftList />
            </main>


        </div>
    );
}

