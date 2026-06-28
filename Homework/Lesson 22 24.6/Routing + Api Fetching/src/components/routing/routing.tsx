import { Navigate, Route, Routes } from "react-router-dom";
import { Ytvideo } from "../pages/ytvideo/ytvideo";
import { Products } from "../pages/products/products";
import { Story } from "../pages/story/story";
import { About } from "../pages/about/about";
import { useEffect } from "react";
import { Employees } from "../pages/employees/employees";

// 1. Create a quick helper component for the external link
function ExternalRedirect() {
    useEffect(() => {
        window.location.href = "https://tomer-sherman.github.io/john-bryce-fullstack-course/UseState/";
    }, []);

    return <p>Redirecting...</p>; // Brief fallback text while loading
}



export function Routing() {
    return (



        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Ytvideo />} />

            <Route path="/products" element={<Products />} />

            <Route path="/story" element={<Story />} />

            <Route path="/about" element={<About />} />

            <Route path="/employees" element={<Employees />} />

            <Route path="*" element={<ExternalRedirect />} />
        </Routes>


    );
}
