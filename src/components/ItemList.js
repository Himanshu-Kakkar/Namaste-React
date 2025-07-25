import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
    // item is goes as action in reducer function in cartSlice()

    // it is working something like
    // reducer function create an object of item data
    // and it goes like
    // {
    //   type:
    //   payload: "pizza";
    // }
    // dispatch sends action object to the redux store
    // thats why we access it by action.payload

  };

  // if (!items || items.length === 0) return <p>No items in cart</p>;

  return (
    <div>
  {items.map((item, index) => (
    <div
      // data-testid="foodItems"
      key={`${item.card.info.id}-${index}`}
      // using index along with id to avoid duplicate key error
      className="flex flex-row p-4 m-4 border-b-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      {/* Image Section */}
      <div className="w-24 h-24 flex-shrink-0 mr-4">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between w-full">
        {/* Dish name & price */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-md font-bold text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="text-sm font-semibold text-green-600">
            ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-end mt-3">
          <button
            className="px-4 py-1 rounded-md bg-orange-500 text-white font-medium text-sm shadow hover:bg-orange-600 transition"
            onClick={() => handleAddItem(item)}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default ItemList;
