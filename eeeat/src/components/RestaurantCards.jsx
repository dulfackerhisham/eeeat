import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaData}) => {
    const {name, cuisines, locality, areaName, avgRating, costForTwo, cloudinaryImageId, veg} = restaData?.info;

  
    return(
  
    <div className="m-6 p-4 w-[250px] bg-slate-200 shadow-md hover:bg-slate-400 rounded-md">
      <img className='w-56 h-40 rounded-md' src={CDN_URL+cloudinaryImageId} alt="biriyani" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="p-2 font-semibold">{cuisines.join(", ")}</h4>
      <h4 className="p-2 font-serif">{locality}, {areaName}</h4>
      <h4 className="p-2 font-serif">{avgRating} Stars</h4>
      <h4 className="p-2 font-sans">{costForTwo}</h4>
    </div>
    )
  };

  // Higher Order Component

  export const withVegLabel = (RestaurantCard) => {
    return (restaData) => {
      // console.log({...restaData});
      return (
        <div>
          <label className="absolute ml-10 bg-black text-white px-4">Veg</label>
          <RestaurantCard {...restaData}/>
        </div>
      )
    }
  };

  export default RestaurantCard;