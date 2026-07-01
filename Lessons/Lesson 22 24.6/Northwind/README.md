routing it is a protocol in react, and in other frameworks,

lets you show a component, in condition of a url that exist in the page.,
most of the times, it is, in part of a site, Route:
for example:

http://www.mysite.com this is the main site route.
https://www.mysite.com/sports/football this is a specific page inside my site.

this Route Protocol, helps you nav the site.

this Routing protocol , doesn't exist, in the nodes-module by defult you need too add it too the project.

when using type script sometimes there is another libary that has Types that, cause alot of older, packeges were creates just from JS.you need too add another sub-package in this case you use TypeScript. too use this RoutePackage, using typescript.

since this package, is only used in Development, And not in production, you have too put this package in Dev-dependensies. you need too Do it manually i think.

you need too write while you write npm install types@balhblah -D in the end add this -D in the end too move it too the dev dependensies, in the package json file.

this package comes with special tags,
Routes and route inside
each route has path and an element.

All this Routing setup is a 3 step setup:

1. install npm -react-router-dom    -@types/react-router-dom.
2. Create 2 Components One is usually Menu or nav and the second is Routing.
3. The routing Setup file, examle for routing setup:
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../page-area/home/home";
import { ProductList } from "../../product-area/product-list/product-list";
import { About } from "../../page-area/about/about";

export function Routing() {
    return (



        <Routes>

            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />


        </Routes>


    );
}


The menu Setup!:

import { NavLink } from "react-router-dom";
import "./menu.css";
// This is HREF IS SHIT, IT connects the user too the server.
// instead of using A cause the href attribute goes too the server and takes info
// Use instead of A NavLink a special, tag.
export function Menu() {
    return (
        <div className="Menu">

            <NavLink to="/home">Home </NavLink>

            <NavLink to="/products">Products </NavLink>

            <NavLink to="/about">About </NavLink>

        </div>
    );
}


i will simplfy it too words later DON'T FORGETT!!!!

* lazy Loading:
, it a situation, when there is no reason, too give a component, too the main page of the site when it is First loaded.
for example : Admin page,
it is a component that i want too give only the Admin, not a normal user.

GO OVER LAZY LOADING TODAY!!!!!!

Service:

is a Class, that contains, ONLY LOGIC, you use logic there and this classes are made out of singeltons.

In order too create a service you write in the terminal : create service serviceName

// Keep in mind the teacher doesnt like that you have the import typeABOVE

northWind gave you the abilty too create a server using CLI
the cli is:

npm install --global northwind-rest-api
too activate the server you need too write northwind





