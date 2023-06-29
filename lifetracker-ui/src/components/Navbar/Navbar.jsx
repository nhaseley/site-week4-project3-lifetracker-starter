import "./Navbar.css";
import * as React from "react";
import {Outlet, Link} from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="css-70qvj9">
          <Link className="logo" to={"/"}>
            <img
              src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"
              alt="logo"
            ></img>
          </Link>
          <Link className="chakra-link css-74uit1" to={"/activity"}>
            Activity
          </Link>
          <Link className="chakra-link css-74uit1" to={"/exercise"}>
            Exercise
          </Link>
          <Link className="chakra-link css-74uit1" to={"/nutrition"}>
            Nutrition
          </Link>
          <Link className="chakra-link css-74uit1" to={"/sleep"}>
            Sleep
          </Link>
        </div>
        <div className="css-70qvj9">
            <button type="button" className="chakra-button css-1t9i4zo">
            <Link to={"/login"} className="login-button">
                Sign In
            </Link>
             
            </button>
            <button type="button" className="chakra-button css-td8gbm">
            <Link to={"/register"} className="register-button">
                Register
            </Link>

            </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
