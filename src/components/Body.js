import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // State Variable - Super Powerful Variable
    const [listOfRestaurents, setListOfRestaurents] = useState(resList);

    // normal JS variable
    // let filteredResList = [
    // {
    //     info: {
    //     id: "803171",
    //     name: "Burger King",
    //     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/0a828633-04e0-4246-a0b8-9a9edbbf8f91_803171.jpg",
    //     costForTwo: "₹350 for two",
    //     cuisines: ["Burgers", "American"],
    //     avgRating: 3.1,
    //     sla: {
    //         deliveryTime: 27,
    //     },
    //     },
    // },
    // {
    //     info: {
    //     id: "76502",
    //     name: "Pizza Hut",
    //     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/db41ead0-c752-4236-9951-82230b137c40_76502.JPG",
    //     costForTwo: "₹350 for two",
    //     cuisines: ["Pizzas"],
    //     avgRating: 3.6,
    //     sla: {
    //         deliveryTime: 29,
    //     },
    //     },
    // },
    // {
    //     info: {
    //     id: "76627",
    //     name: "KFC",
    //     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c0ef7f9e-55d0-414d-afcc-11fad4bdb04f_76627.JPG",
    //     costForTwo: "₹450 for two",
    //     cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    //     avgRating: 4.3,
    //     sla: {
    //         deliveryTime: 24,
    //     },
    //     },
    // },
    // {
    //     info: {
    //     id: "545038",
    //     name: "La Pino'z Pizza",
    //     cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
    //     costForTwo: "₹350 for two",
    //     cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    //     avgRating: 4.1,
    //     sla: {
    //         deliveryTime: 24,
    //     },
    //     },
    // },
    // ];

    return(
        <div>
            <div className="body">
                <div className="filter">
                    <button 
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestaurents.filter(
                                (res) => res.info.avgRating >4
                            );
                            setListOfRestaurents(filteredList);
                            // console.log("Button Clicked"); 
                        }}
                        >
                        Top Rated Restaurent
                    </button>
                </div>
            </div>

            {/* <div className="search">Search</div> */}

            <div className="res-container">
                {
                    listOfRestaurents.map((restaurent) => (
                        <RestaurantCard key={restaurent.info.id} resData = {restaurent}/>))
                }           
            </div>
        </div>
    )
    
}

export default Body;