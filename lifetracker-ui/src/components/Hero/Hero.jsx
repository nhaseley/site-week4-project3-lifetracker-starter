import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
      <div className="css-1561uet">
        <div className="chakra-stack css-lngjhf">
          <h1 className="chakra-heading css-bgad6s">LifeTracker</h1>
          <h2 className="chakra-heading css-1la3ewl">
            Helping you take back control of your world.
          </h2>
          {/* <a href="/signup"> */}
          <button type="button" className="chakra-button css-uybm84">
            Create your account now
          </button>
          {/* </a> */}
        </div>
        <div className="css-jocq0n">
          <img
            src="https://lifetracker-ui-ai8e.onrender.com/assets/tracker-2a96bfd0.jpg"
            className="chakra-image css-incex5"
          ></img>
        </div>
      </div>
  );
}
