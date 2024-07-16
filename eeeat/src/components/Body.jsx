import RestaurantCard, {withVegLabel} from "./RestaurantCards"
// import restaList from "../utils/mockData"
import {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredListRest] = useState([])

  const [searchText, setSearchText] = useState("")

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const {setUserData, loggedInUser} = useContext(UserContext);

  // const RestaurantCardVeg = withVegLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
      <h1>
        Looks like your offline!! Please check your internet connection
      </h1>
    )
  }

  return listOfRestaurant.length === 0 ? <Shimmer /> :(

    <div className="body">
      
      <div className="flex">

        <div className="m-4 p-4 ">
          <input type="search" className="border border-black" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }
          }
          />
          <button className="px-4 py-0.5 bg-green-200 m-2 rounded-md"
          onClick={() => {
            console.log(searchText);
            const filteredrest = listOfRestaurant.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredListRest(filteredrest)
          }} >Search
          </button>

        </div>


        <div className="m-4 p-4 flex items-center">
        <button 
        className="px-4 py-1 bg-gray-200 rounded-md"
        onClick={() => {
          const filteredListRest = listOfRestaurant.filter((res) => res.info.avgRating > 4.1);
          setFilteredListRest(filteredListRest)
          console.log(filteredListRest);
        }}
        >
        Top Rated Restaurants
        </button>
        </div>

        <div className="flex items-center">
          <input type="text"
          className="border-black border"
          value={loggedInUser}
          onChange={(e) => setUserData(e.target.value)} />
        </div>

      </div>

      <div className="flex flex-wrap"> 
        {filteredRestaurant.map((restaCards) => <Link 
        key={restaCards.info.id}
         to={"/restaurants/"+restaCards.info.id}
         > 
         {restaCards.info.veg ? <RestaurantCardVeg restaData={restaCards}/> : <RestaurantCard  restaData={restaCards}/>}
         
          </Link>
      )};
      </div>
    </div>
  )
};

export default Body;