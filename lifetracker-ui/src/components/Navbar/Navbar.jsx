import "./Navbar.css";
import * as React from "react";
import {Outlet, Link} from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <div className="Navbar css-15bu2in">
        <div className="css-70qvj9">
          <a className="chakra-link css-14rj303" href="/">
            <img
              src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"
              alt="logo"
            ></img>
          </a>
          <a className="chakra-link css-74uit1" href="/activity">
            Activity
          </a>
          <a className="chakra-link css-74uit1" href="/exercise">
            Exercise
          </a>
          <a className="chakra-link css-74uit1" href="/nutrition">
            Nutrition
          </a>
          <a className="chakra-link css-74uit1" href="/sleep">
            Sleep
          </a>
        </div>
        <div className="css-70qvj9">
          <a className="chakra-link css-spn4bz" href="/login">
            <button type="button" className="chakra-button css-1t9i4zo">
            <Link to={"/login"} className="login-button">
                Sign In
            </Link>
             
            </button>
          </a>
          <a className="chakra-link css-spn4bz" href="/register">
            <button type="button" className="chakra-button css-td8gbm">
            <Link to={"/register"} className="register-button">
                Register
            </Link>

            </button>
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
}
