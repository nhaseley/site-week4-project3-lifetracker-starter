import * as React from "react";
import "./Hero.css";
import {Link} from "react-router-dom"

export default function Hero() {
  return (
      <div className="hero">
        <div className="chakra-stack css-lngjhf">
          <h1 className="chakra-heading css-bgad6s">LifeTracker</h1>
          <h2 className="cta">
            Helping you take back control of your world.
          </h2>
          <button type="button" className="chakra-button css-uybm84">
          <Link to={"/register"} className="register-button">
            Create your account now
          </Link>
          </button>
        </div>
        <div className="css-jocq0n">
          <img
            src="https://lifetracker-ui-ai8e.onrender.com/assets/tracker-2a96bfd0.jpg"
            className="hero-img"
          ></img>
        </div>
      </div>
  );
}
