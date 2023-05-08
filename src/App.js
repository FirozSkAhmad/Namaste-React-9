import React from "react";
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


const App = () => {
    return (
        <>
            <Header />
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
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);