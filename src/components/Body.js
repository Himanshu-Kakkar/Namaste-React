import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    // State Variable - Super Powerful Variable
    // const resList = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(()=> {
        console.log("useEffect called");
        fetchData();
    }, []);
    console.log("Body rendered", listOfRestaurents);
    
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

    if(onlineStatus === false) return <h1>Seems like you are Offline!!!</h1>

    return(
        <div>
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> {
                            setSearchText(e.target.value);
                            }}
                        />
                        <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            // Filter the restaurent cards and update the UI
                            // Search Text
                            console.log(searchText);

                            const filteredRestaurent = listOfRestaurents.filter((res) => {
                                console.log(res);
                                res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            })

                            setListOfRestaurents(filteredRestaurent);
                        }}>
                            Search
                        </button>
                    </div>
                    <div className="search m-4 p-4 flex items-center">
                        <button 
                            className="px-4 py-2 bg-gray-100 rounded-lg"
                            onClick={() => {
                                const filteredList = listOfRestaurents.filter(
                                    (res) => res.info.avgRating>4.5
                                );
                                setListOfRestaurents(filteredList);
                                // console.log("Button Clicked"); 
                            }}
                            >
                            Top Rated Restaurent
                        </button>
                    </div>
                    
                </div>
            </div>

            {/* <div className="search">Search</div> */}

            <div className="res-container flex flex-wrap">
                {
                    listOfRestaurents.map((restaurent) => (

                        <Link 
                        to={"/restaurents/"+restaurent.info.id} 
                        key={restaurent.info.id}
                        >
                            {/* If the restaurent is promoted then add a promoted label to it */
                                restaurent.info.promoted ? (
                                    <RestaurantCardPromoted resData={restaurent}/>
                                ) : (
                                    <RestaurantCard  resData = {restaurent}/>
                            )}
  
                        </Link>
                        ))
                }           
            </div>
        </div>
    )
    
}

export default Body;