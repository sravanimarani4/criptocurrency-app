import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Coincontext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(Coincontext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        console.log("Selected Currency:", { name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        console.log("Selected Currency:", { name: "eur", symbol: "€" });
        // rupiees symbol keyboard keys alt+0128;
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        console.log("Selected Currency:", { name: "inr", symbol: "₹" });
        // rupiees symbol keyboard keys ctrl+alt+4;
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd" className="usd">
            USD
          </option>
          <option value="eur" className="eur">
            EUR
          </option>
          <option value="inr" className="inr">
            INR
          </option>
        </select>
        <button>
          Sign up
          <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
