import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        
        <nav>
            <div id="nav-box">
                <img src="static/Jadoo.png" alt="" />
                <div id="nav-items-1">
                    <Link to={"./"}>HOME</Link>
                    <Link to={"/blogs?topic=computer"}>ABOUT</Link>
                    <Link to={"#"}>GET ARTICLE</Link>
                    <Link to={"#"}>CONTACT US</Link>
                </div>
            </div>
            <div class="ham-container">
                <input type="checkbox" name="" id="" class="check" />
                <ul class="menu-items">
                    <li><a href="#" target="_blank">Destinations</a></li>
                    <li><a href="#" target="_blank">Hotels</a></li>
                    <li><a href="#" target="_blank">Flights</a></li>
                    <li><a href="#" target="_blank">Bookings</a></li>
                  </ul>
                <div class="ham-menu">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
            </div>
        </nav>

        
    </header>
    </div>
  );
}

export default Navbar;
