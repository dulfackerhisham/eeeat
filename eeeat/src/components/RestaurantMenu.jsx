import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {


    const {resId} = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const {name, areaName, avgRatingString, city, costForTwoMessage, cuisines} = resInfo.data.cards[2].card.card.info;

    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    // console.log(itemCards);


    


    return (
        <div>
            <h1>{name}</h1>
            <h2>{city}, {areaName}</h2>
            <h3> Rating: {avgRatingString}</h3>
            <h3>Cost for 2: {costForTwoMessage}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Menu</h4>
            <ul>
                {itemCards.map(res => 
                <li key={res.card.info.id}>
                {res.card.info.name} - Rs{res.card.info.price/100}</li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu