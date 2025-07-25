import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // subscribe to the whole store
    // any changes does in the store make store var update
    // but its unneccessary

    // const store = useSelector((store)=> store);
    // const cartItems = store.cart.items;
    
    // Do always
    // subscribing to the small particular portion of the store
    // that we needed to update while chnages in that data
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }
    return (
        <div className="min-w-screen min-h-screen text-center bg-gradient-to-br from-[#fff7ec] via-[#ffe5dc] to-[#fce4ec] mx-0 pt-32 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                    className="p-2 m-2 border border-black bg-black text-white rounded-3xl cursor-pointer"
                    onClick={()=> handleClear()}>
                    Clear Cart
                </button>
                {cartItems.length == 0 && <h1>Cart is Empty</h1>}
                <ItemList items={cartItems}/>
            </div>
        
        </div>
    )
}

export default Cart;