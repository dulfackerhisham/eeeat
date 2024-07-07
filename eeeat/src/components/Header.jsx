import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login")

  return(

    <header className='heading'>
      <nav className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
      </nav>
  
      <nav className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Profile</li>
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