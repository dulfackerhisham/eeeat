import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login")

useEffect(() => {console.log("useEffect called");}, [])
  

  return(

    <header className='heading'>
      <nav className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
      </nav>
  
      <nav className='nav-items'>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            </li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li>Cart</li>
          <li>
            <Link to={"/contact"} >Contact</Link>
            </li>
          <button className="login-btn" onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
            console.log(btnName);
          }}
          >{btnName}</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;