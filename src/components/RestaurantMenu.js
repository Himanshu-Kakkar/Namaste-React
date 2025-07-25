import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

  const dummy = "Dummy Data";
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p> 
      {/* categories accordions */}
      {!Array.isArray(categories) || categories.length === 0 ? (
        <p className="text-gray-500 mt-6 text-lg italic">
          No menu categories found for this restaurant.
        </p>
      ) : (
        categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
            dummy={dummy}
          />
        ))
      )}

    </div>
  );
};

export default RestaurantMenu;