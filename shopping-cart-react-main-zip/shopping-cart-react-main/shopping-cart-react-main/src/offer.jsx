import React from "react";
// import Shop from "shop";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";
import product2 from "./assets/products/oils.jpeg";
import product8 from "./assets/products/rice flour.jpeg";
import product1 from "./assets/products/rice.jpeg";
import product9 from "./assets/products/chilli.jpeg";
import product11 from "./assets/products/kurkure.jpeg";
import product14 from "./assets/products/drinks.jpeg";
import product3 from "./assets/products/basmati.jpeg";

export const Offer = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          {/* <h1>HELP</h1> */}
          <h3>Today Offers</h3>
          
        </div>
        <center>
        <ul type="none">
        <li><h2>on Edible Oils :upto 50% off</h2></li>
        <img src={product2} height="200px"></img>
        <li><h2>on Flours      :upto 40% off</h2></li>
        <img src={product8} height="200px"></img>
        <li><h2>on Rice Items  :upto 50% off</h2></li>
        <img src={product1} height="200px"></img>
        <li><h2>on Spices      :upto 50% off</h2></li>
        <img src={product9} height="200px"></img>
        <li><h2>on Snacks      :upto 50% off</h2></li>
        <img src={product11} height="200px"></img>
        <li><h2>on CoolDrinks  :upto 40% off</h2></li>
        <img src={product14} height="200px"></img>
        <li><h2>on Rice Items  :upto 50% off</h2></li>
        <img src={product3} height="200px"></img>
        </ul>
        </center>
      </div>
    );
  };