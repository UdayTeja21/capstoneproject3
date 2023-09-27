import React from "react";
// import Shop from "shop";
import { Link } from "react-router-dom";

// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";
import "./help.css";
function submitted()
{
  alert("form submiytted");
}

export const Help = () => {
    return (
     
      <div className="shop">
        <div className="shopTitle">
          <h3>HELP</h3>
          <marquee><p>!--If this page doesnt work please click on this  link--!</p></marquee>
          <Link to="/contact"> Contact </Link>
          <center>
          <div class="Container">
          
            <form className="ff">
              <p className="qq"><b>Any queries? Ask here!</b></p>
              <label className="ll">Name:</label>
             <input className="as" type="text" placeholder="Enter the Name"></input><br></br>
             <label className="ll">Phone number:</label>
             <input className="as" type="text" placeholder="Enter the number"></input><br></br>
             <label className="ll">Email:</label>
             <input className="as" type="email" placeholder="Enter your Email"></input><br></br>
            <button className="btn" onClick={submitted}>Submit</button>
            </form>

          </div>
          </center>
         
         
        </div>
      </div>
    );
  };
  