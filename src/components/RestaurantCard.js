import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="w-[280px] h-[370px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h4 className="text-lg font-bold text-pink-700 truncate">{name}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">
          {cuisines.join(", ")}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
            ⭐ {avgRating}
          </span>
          <span className="text-sm font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">
            {costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
