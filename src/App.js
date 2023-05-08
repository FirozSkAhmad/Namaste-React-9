import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"))


const App = () => {

    return (
        <>
            <Suspense><Header /></Suspense>
            <Outlet />
            <Footer />
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/resturantMenu/:id',
                element: <ResturantMenu />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />,
                children: [
                    {
                        path: 'email',
                        element: <Email />
                    }
                ]
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<h1>InstaMart Shimmer.....</h1>}><InstaMart /></Suspense>
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);