import * as React from "react";
import "./LoginPage.css"
import {Link} from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="css-9cjjy5">
      <div className="chakra-stack css-13ra036">
        <span className="chakra-avatar css-3fy9wq">
          <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" className = "user-profile-img"></img>
        </span>
        <h2 className="chakra-heading css-3q8efk">Welcome</h2>
        <div className="css-ebzegt">
          <form>
            <div className="chakra-stack css-1db3zf7">
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-1cw84h2">
                    <img src="https://www.transparentpng.com/download/send-email-button/DyZNCL-send-email-button-free-download-transparent.png" className ="email-img"></img>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    // id="field-:r8:"
                    // required=""
                    // aria-required="true"
                    className="chakra-input css-1aepka5"
                    value=""
                  ></input>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-17ke578">
                    <img src="https://www.pngitem.com/pimgs/m/140-1407340_lock-icon-clipart-png-download-white-login-password.png" className="password-img"></img>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    // id="field-:r9:"
                    // required=""
                    // aria-required="true"
                    className="chakra-input css-1fwij33"
                    value=""
                  ></input>
                  <div className="chakra-input__right-element css-1qww07b">
                    <button type="button" className="chakra-button css-1xgetim">
                      Show
                    </button>
                  </div>
                </div>
              </div>
              <button type="submit" className="chakra-button css-4lvvxn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="css-0">
        New to us?{" "}
        {/* <a className="chakra-link css-c6nly4" href="/register">
          Sign Up
        </a> */}
        <Link to={"/register"} className="register-button">
            Sign Up
        </Link>
      </div>
    </div>
  );
}
