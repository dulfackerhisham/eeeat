import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return(
        <div>
                {items.map((item) => <div key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">



                    <div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - Rs{item.card.info.price ? item.card.info.price/100 : item.card.info.price}</span>       
                    </div>
                    </div>
                    <p></p>
                    <div className="p-3">
                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg text-green-500 rounded-lg"
                            onClick={() => handleAddItem(item)}
                            >Add</button>
                        </div>
                        {item.card.info.imageId ? <img src={CDN_URL + item.card.info.imageId} className="w-36 rounded-md" /> : null}
                    </div>
                </div>
            )}
        </div>
    )
};

export default ItemList;