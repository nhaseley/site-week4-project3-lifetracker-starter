import * as React from "react";
import "./LoginPage.css"
import {Link} from "react-router-dom"

export default function LoginPage(loginUser, handleEmailInput, handlePasswordInput) {
  return (
    <div className="login-page">
      <div className="login-form">
        <span className="chakra-avatar css-3fy9wq">
          <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" className = "user-profile-img"></img>
        </span>
        <h2 className="chakra-heading css-3q8efk">Welcome</h2>
        <div className="css-ebzegt">
          <form>
            <div className="chakra-stack css-1db3zf7">
              <div role="group" className="form-input">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-1cw84h2">
                    <img src="https://www.transparentpng.com/download/send-email-button/DyZNCL-send-email-button-free-download-transparent.png" className ="email-img"></img>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"in
                    className="chakra-input css-1aepka5"
                    value=""
                    onChange={handleEmailInput}
                  ></input>
                </div>
              </div>
              <div role="group" className="form-input">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-17ke578">
                    <img src="https://www.pngitem.com/pimgs/m/140-1407340_lock-icon-clipart-png-download-white-login-password.png" className="password-img"></img>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="chakra-input css-1fwij33"
                    value=""
                    onChange={handlePasswordInput}
                  ></input>
                  <div className="chakra-input__right-element css-1qww07b">
                    <button type="button" className="chakra-button css-1xgetim">
                      Show
                    </button>
                  </div>
                </div>
              </div>
              <button type="submit" className="submit-login" onClick={loginUser}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="css-0">
        New to us?{" "}
        <Link to={"/register"} className="register-button">
            Sign Up
        </Link>
      </div>
    </div>
  );
}
