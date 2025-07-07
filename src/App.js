import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";


// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };

// Lazy Loading
// On demand loading
// Chunking
// Code Splitting
// Dynamic Bundling
// dynamix import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return(
        <div className= "app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurentMenu/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading Grocery...</h1>}>
                            <Grocery/>
                         </Suspense>
            }
        ],
        errorElement: <Error/>,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
