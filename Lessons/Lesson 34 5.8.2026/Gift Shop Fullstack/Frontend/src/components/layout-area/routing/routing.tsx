import { Navigate, Route, Routes } from "react-router-dom";


import { Home } from "../../pages-area/home/home";
import { Page404 } from "../../pages-area/page404/page404";
import { New } from "../../pages-area/new/new";
import { Gifts } from "../../pages-area/gifts/gifts";

export function Routing() {

    return (
        <Routes>

            {/* Default Route: */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Home: */}
            <Route path="/home" element={<Home />} />

            {/* Data:  */}
            <Route path="/new" element={<New />} />

            {/* About:  */}
            <Route path="/gifts" element={<Gifts />} />

            {/* Page not found: */}
            <Route path="*" element={<Page404 />} />

        </Routes>
    );
}
