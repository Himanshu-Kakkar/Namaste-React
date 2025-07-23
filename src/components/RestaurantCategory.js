import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* Accordion Header */}
      <div
        className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto my-5 p-5 
        bg-gradient-to-r from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] 
        rounded-xl shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
      >
        <div
          className="flex justify-between items-center"
          onClick={handleClick}
        >
          <span className="text-lg md:text-xl font-bold text-orange-600">
            🍱 {data.title}{" "}
            <span className="text-gray-500">({data.itemCards.length})</span>
          </span>
          <span className="text-2xl">{showItems ? "🔼" : "🔽"}</span>
        </div>

        {/* Accordion Body */}
        {showItems && (
          <div className="pt-4">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
