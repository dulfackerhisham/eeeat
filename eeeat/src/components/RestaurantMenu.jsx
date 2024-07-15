import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {


    const {resId} = useParams();
    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);


    if (resInfo === null) return <Shimmer />;


    const {name, cuisines} = resInfo.data.cards[2].card.card.info;

    const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    const categories =resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);


    // console.log(resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    // console.log(itemCards);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h4 className="font-bold text-lg">{cuisines.join(", ")}</h4>

            <h4 className="">Menu</h4>
            {categories.map((category, index)=> 

            // controlled Component
            <RestaurantCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showItems={index === showIndex ? true: false}
            setShowIndex={() => setShowIndex(index)}
             />)}
        </div>
    )
};

export default RestaurantMenu