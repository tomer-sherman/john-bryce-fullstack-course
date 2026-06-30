import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages-area/home/home";
import { ProductList } from "../../product-area/product-list/product-list";
import { lazy, Suspense, useEffect } from "react";
import { Spinner } from "../../shared-area/spinner/spinner";
import { EmployeeList } from "../../employee-area/employee-list/employee-list";
import { ProductDetails } from "../../product-area/product-details/product-details";
import { AddProduct } from "../../product-area/add-product/add-product";
import { EditProduct } from "../../product-area/edit-product/edit-product";

export function Routing() {

    // Create lazy component for the About: 
    const AboutLazy = lazy(() => import("../../pages-area/about/about").then(module => ({ default: module.About })));

    // Create Suspense component which is going to be displayed: 
    const AboutSuspense = <Suspense fallback={<Spinner />}> <AboutLazy /> </Suspense>

    return (
        <Routes>

            {/* Default Route: */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Home: */}
            <Route path="/home" element={<Home />} />

            {/* Products:  */}
            <Route path="/products" element={<ProductList />} />
            {/* Product details:  */}
            <Route path="/products/details/:prodId" element={<ProductDetails />} />
            {/* New Product:  */}
            <Route path="/products/new" element={<AddProduct />} />

            <Route path="/products/edit/:prodId" element={<EditProduct />} />



            {/* Employees:  */}
            <Route path="/employees" element={<EmployeeList />} />

            {/* About:  */}
            <Route path="/about" element={AboutSuspense} />

            {/* Page not found: */}
            <Route path="*" element={<Page4044 />} />

        </Routes>
    );


}

export function Page4044() {
    useEffect(() => {
        window.location.href = "https://tomer-sherman.github.io/john-bryce-fullstack-course/UseState/";
    }, []);

    return <p>Loading...</p>
}