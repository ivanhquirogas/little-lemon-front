import React from "react";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-icon">
          <img src={logo} alt="" />
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              Address: <br /> 742 Evergreen Terrace, Springfield, USA
            </li>
            <li>
              Phone: <br /> +01 555 6832
            </li>
            <li>
              Email: <br /> contact@littlelemon.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
