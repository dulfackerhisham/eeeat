import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({restaData}) => {
    const {name, cuisines, locality, areaName, avgRating, costForTwo, cloudinaryImageId} = restaData?.info;
  
    return(
  
    <div className="resta-cards" style={{backgroundColor: 'lightblue'}}>
      <img className='resta-logo' src={CDN_URL+cloudinaryImageId} alt="biriyani" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}, {areaName}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
    )
  };

  export default RestaurantCard