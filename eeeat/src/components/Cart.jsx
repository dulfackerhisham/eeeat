import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-3">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            {cartItems.length > 0 ?                 
                <button className="p-2 m-2 bg-black text-white rounded"
                onClick={handleClearCart}
                >Clear Cart
                </button> : null}


                {cartItems.length === 0 && 
                <h1 className="mt-9 font-bold text-xl">Cart is Empty, Add items to the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;