import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [showNav, setShowNav] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
      
      <img src={logo} alt="" className='logo' />
      </Link>
      <ul className={showNav ? "show-nav" : ""}>
       <Link to={'/'}><li>Home</li></Link> 
        {/* <li>Features</li> */}
        {/* <li>Pricing</li> */}
        <Link to={'/Blog'}>
        <li>Tutorial</li>
        </Link>
        
      </ul>
      <div className="navright">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        
        {<Link to={'/Singin'}><button>Sign Up <img src={arrow_icon} alt="" /></button></Link>} 

        <div className="menu-icon"  onClick={() => setShowNav(!showNav)}>
          &#x2022;&#x2022;&#x2022;
        </div>
      </div>
    </div>
  );
}

export default Navbar;
