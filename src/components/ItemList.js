import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  if (!items || items.length === 0) return <p>No items in cart</p>;

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center gap-5 p-5 bg-gradient-to-br from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] 
          rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-orange-100"
        >
          {/* Image */}
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name}
            className="w-24 h-24 rounded-xl object-cover shadow-sm"
          />

          {/* Info Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-orange-600">
                {item?.card?.info?.name}
              </h3>
              <span className="text-md text-green-700 font-semibold">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Add Button */}
          <div>
            <button
              onClick={() => handleAddItem(item)}
              className="bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition font-semibold shadow"
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
