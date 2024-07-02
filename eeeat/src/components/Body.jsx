import RestaurantCard from "./RestaurantCards"
import restaList from "../utils/mockData"
import {useState} from "react";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(restaList);

  return (

    <div className="body">
      <div className="filter">
        <button 
        className="top-rated-resta"
        onClick={() => {
          const filteredListRest = listOfRestaurant.filter((res) => res.info.avgRating > 4.1);
          setListOfRestaurant(filteredListRest)
          console.log(filteredListRest);
        }}
        >
        Top Rated Restaurants
        </button>
      </div>
      
      <div className="resta-container">
        {listOfRestaurant.map((restaCards) => <RestaurantCard key={restaCards.info.id} restaData={restaCards}/>)}
      </div>
    </div>
  )
};

export default Body;