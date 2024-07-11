import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";


const RestaurantMenu = () => {


    const {resId} = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;


    const {name, areaName, avgRatingString, city, costForTwoMessage, cuisines, cloudinaryImageId} = resInfo.data.cards[2].card.card.info;

    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


    // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    // console.log(itemCards);

    return (
        <div className="ml-[520px] mt-11 p-4 w-[400px] bg-slate-200 shadow-md hover:bg-slate-400 rounded-md">
            <img className="rounded" src={CDN_URL+cloudinaryImageId} alt="" />
            <h1 className="font-bold py-2 text-lg">{name}</h1>
            <h2 className="p-2 font-semibold">{city}, {areaName}</h2>
            <h3 className="p-2 font-sans"> Rating: {avgRatingString}</h3>
            <h3 className="p-2 font-serif">Cost for 2: {costForTwoMessage}</h3>
            <h4 className="p-2 font-mono">{cuisines.join(", ")}</h4>
            <h4 className="font-extrabold">Menu</h4>
            <ul className="font-semibold">
                {itemCards.map(res => 
                <li key={res.card.info.id}>
                {res.card.info.name} - Rs{res.card.info.price/100}</li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu