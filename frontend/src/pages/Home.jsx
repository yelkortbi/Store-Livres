import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/products/bookstore.jpg";
import "./Home.css"

export const Home = () => {
  return (
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> ystore </h1>
        <p>welcome to the best bookstore </p>
        <Link to="/">
          <button> ORDER NOW </button>
        </Link>
      </div>
      
      
    </div>




  
  );
}
