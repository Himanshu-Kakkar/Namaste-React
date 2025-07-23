import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // useRestaurantMenu is a custom hook for fetching the data of menu

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <div>{cuisines.join(" , ")}</div>
      <div>
        {categories.map((category) => (
          <RestaurantCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
