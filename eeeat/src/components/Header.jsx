import { LOGO_URL } from "../utils/constants";

const Header = () => (
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
        </ul>
      </nav>
    </header>
  )

export default Header;