import RestaurantCard from "./RestaurentCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    // State Variable - Super Powerful Variable
    // const resList = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const [listOfRestaurents, setListOfRestaurents] = useState([]);


    useEffect(()=> {
        console.log("useEffect called");
        fetchData();
    }, []);
    console.log("Body rendered");
    
    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=24.546301&lng=73.7142897&carousel=true&third_party_vendor=1"
            );
            const json = await data.json();
            // console.log("json kaha hai?");
            console.log(json);

            setListOfRestaurents(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
        } catch (err) {
            console.log("Fetch failed ho gya ", err);
        }
        
    };

    if(listOfRestaurents.length === 0){
        return <Shimmer/>;
    }
    


    return(
        <div>
            <div className="body">
                <div className="filter">
                    <button 
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestaurents.filter(
                                (res) => res.info.avgRating
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