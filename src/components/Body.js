import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_DATA } from "../utils/constants";


const Body = () => {
    // State Variable - Super Powerful Variable
    // const resList = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const onlineStatus = useOnlineStatus();

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=> {
        // console.log("useEffect called");
        fetchData();
    }, []);

    // console.log("Body rendered", listOfRestaurants);
    
    const fetchData = async () => {
        try {
            const data = await fetch(
                RESTAURANT_DATA
            );
            const json = await data.json();
            // console.log("json kaha hai?");
            // console.log(json);
            const cards = json?.data?.cards || [];

            const restaurantCard = cards.find(
                (card) => 
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
            );
            const restaurants = restaurantCardcard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);

        } catch (err) {
            console.log("Fetch failed ho gya ", err);
        }
        
    };

    if(onlineStatus === false) 
        return <h1 className="text-center text-3xl font-bold text-red-600 mt-10">
                    Seems like you are 🚫 Offline!!!
                </h1>

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ):(
    <div className="body bg-gradient-to-b from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] min-h-screen py-6 px-4 pt-24">
      <div className="filter flex flex-wrap justify-center items-center gap-4 mb-6">
        <div className="input flex flex-wrap items-center gap-2">
          <input
            type="text"
            className="border border-orange-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-pink-600 hover:to-orange-500 cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <span className="relative z-10">🔍 Search</span>
          </button>
        </div>

        <button
          className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-pink-600 hover:to-orange-500 cursor-pointer"
          onClick={() => {
            const filtered = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filtered);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="hover:scale-105 transition-transform duration-200"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;