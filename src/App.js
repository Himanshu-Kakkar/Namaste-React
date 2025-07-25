import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import UserContext from "./utils/UserContext";

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

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication logic
    useEffect(()=> {
        // fetch API and get data
        const data = {
            name: "Himanshu Kakkar",
        }
        setUserName(data.name);
    },[]);

    return(
        // whole app is wrapped in provider
        // over writing the loggedInUser value
        // all components can use this value
        // we can have nested providers for different components with different value
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className= "app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
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
