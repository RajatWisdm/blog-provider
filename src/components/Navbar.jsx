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
                    <Link to={"./#about"}>ABOUT</Link>
                    <Link to={"./#"}>GET ARTICLE</Link>
                    <Link to={"/contact"}>CONTACT US</Link>
                </div>
            </div>
            <div class="ham-container">
                <input type="checkbox" name="" id="" class="check" />
                <ul class="menu-items">
                    <li><a href="./#">Home</a></li>
                    <li><a href="./#">About</a></li>
                    <li><a href="./#">Get Article</a></li>
                    <li><a href="/contact" target="_blank">Contact Us</a></li>
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
