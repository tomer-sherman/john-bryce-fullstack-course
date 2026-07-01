import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../page-area/home/home";
import { ProductList } from "../../product-area/product-list/product-list";
//import { About } from "../../page-area/about/about";  If you want a lazy loading page you have too remove This
import { Page404 } from "../../page-area/page404/page404";
import { lazy, Suspense } from "react";
import { Spiner } from "../../shared-area/spiner/spiner";
import { EmployeList } from "../../employe-list/employe-list";

export function Routing() {

    // Create lazy component
    const AboutLazy = lazy(() =>
        import("../../page-area/about/about").then(module => ({ default: module.About }))
    );
    const AboutSuspense = <Suspense fallback={<Spiner/>}><AboutLazy /></Suspense>


    return (



        <Routes>

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />

            <Route path="/employes" element={<EmployeList/>} />

            <Route path="/about" element={AboutSuspense} />
            <Route path="*" element={<Page404 />} />


        </Routes>


    );
}

