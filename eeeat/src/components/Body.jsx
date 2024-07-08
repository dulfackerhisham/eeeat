import RestaurantCard from "./RestaurantCards"
// import restaList from "../utils/mockData"
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredListRest] = useState([])

  const [searchText, setSearchText] = useState("")

  // console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.21890&lng=75.72680&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json()

    // optional chaining
    // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredListRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    

  };

  // Conditional Redering
    //used this as a ternary operator to club up together
  // if(listOfRestaurant.length === 0) {
    // return <Shimmer />;
  // }


  return listOfRestaurant.length === 0 ? <Shimmer /> :(

    <div className="body">
      <div className="filter">
        <div className="search-rest">
          <input type="search" className="search-box" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }
          }
          />
          <button onClick={() => {
            console.log(searchText);
            const filteredrest = listOfRestaurant.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredListRest(filteredrest)
          }} >Search</button>
        </div>
        <button 
        className="top-rated-resta"
        onClick={() => {
          const filteredListRest = listOfRestaurant.filter((res) => res.info.avgRating > 4.1);
          setFilteredListRest(filteredListRest)
          console.log(filteredListRest);
        }}
        >
        Top Rated Restaurants
        </button>
      </div>

      <div className="resta-container"> 
        {filteredRestaurant.map((restaCards) => <Link 
        key={restaCards.info.id}
         to={"/restaurants/"+restaCards.info.id}> <RestaurantCard  restaData={restaCards}/>
          </Link>
      )};
      </div>
    </div>
  )
};

export default Body;