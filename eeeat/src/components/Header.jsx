import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";
import {useSelector} from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("login")

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items)

  // useEffect(() => {console.log("useEffect called");}, [])
  

  return(

    <header className='flex justify-between bg-red-600 shadow-lg'>
      <nav className='logo-container'>
        <img className='w-40 ' src={LOGO_URL} alt="logo" />
      </nav>
  
      <nav className="flex  items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
            </li>
          <li className="px-4">
            <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to={"/grocery"}>Grocery</Link>
            </li>
          <li className="px-4">Cart {cartItems.length}</li>
          <li className="px-4">
            <Link to={"/contact"} >Contact</Link>
            </li>
          <button className="px-4" onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
            console.log(btnName);
          }}
          >{btnName}</button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;