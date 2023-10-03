import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
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
              Adress: <br />
              123 Towncity,USA
            </li>
            <li>
              Phone: <br /> +01233455{" "}
            </li>
            <li>
              Email: <br /> littlelemon@lemon.com{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3>Follow us on Social Media</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Threads</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
