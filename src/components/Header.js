import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../assets/restaurantfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>

          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt="Restaurant food" />
        </div>
      </section>
    </header>
  );
};

export default Header;
