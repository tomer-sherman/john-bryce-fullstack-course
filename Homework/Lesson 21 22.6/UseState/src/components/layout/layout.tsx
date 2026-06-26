import { Header } from "./header/header";
import "./layout.css";
import { Main } from "./main/main";


export function Layout() {
    return (
        <div className="Layout">

            <header><Header /></header>

          
            
            <main><Main /></main>

        </div>
    );
}
