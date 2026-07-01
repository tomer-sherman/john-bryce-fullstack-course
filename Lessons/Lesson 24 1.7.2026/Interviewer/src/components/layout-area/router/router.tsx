import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../../pages-area/home/home';
import { About } from '../../pages-area/about/about';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={"/home"}/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

// Capitalized so React recognizes it as a component
function Page404() {
    useEffect(() => {
        // This triggers the browser to navigate away to the external URL
        window.location.href = "https://tomer-sherman.github.io/john-bryce-fullstack-course/UseState/";
    }, []);

    // Return null or a simple "Redirecting..." message while the browser loads the new page
    return <p>Redirecting...</p>;
}