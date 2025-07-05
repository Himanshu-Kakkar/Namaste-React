import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };
// outer {...} means you are going to write JS inside JSX
// inner {...} the actusl JS object 



const AppLayout = () => {
    return(
        <div className= "app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
