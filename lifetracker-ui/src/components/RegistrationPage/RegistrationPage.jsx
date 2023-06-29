import * as React from "react";
import "./RegistrationPage.css";
import {Link} from "react-router-dom"



export default function RegistrationPage({handleEmailInput, handleUsernameInput, handleFirstNameInput, handleLastNameInput, handlePasswordInput, handleConfirmPasswordInput, signupUser}){
    return (
<div className="registration-page">
      <div className="registration-form">
        <span className="chakra-avatar css-3fy9wq">
          <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" className = "user-profile-img"></img>
        </span>
        <h2 className="chakra-heading css-3q8efk">Create an Account</h2>
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
                    placeholder="Email"
                    className="chakra-input css-1aepka5"
                    value=""
                    onChange={handleEmailInput}
                  ></input>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-1cw84h2">
                  <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" className = "username-img"></img>
                  </div>
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="chakra-input css-1aepka5"
                    value=""
                    onChange={handleUsernameInput}
                  ></input>
                </div>
              </div>
              <div className="names"> 
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="chakra-input css-1aepka5"
                    value=""
                    onChange={handleFirstNameInput}
                  ></input>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="chakra-input css-1aepka5"
                    value=""
                    onChange={handleLastNameInput}
                  ></input>
                </div>
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
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div className="chakra-input__group css-bx0blc" data-group="true">
                  <div className="chakra-input__left-element css-17ke578">
                    <img src="https://www.pngitem.com/pimgs/m/140-1407340_lock-icon-clipart-png-download-white-login-password.png" className="password-img"></img>
                  </div>
                  <input
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm Password"
                    className="chakra-input css-1fwij33"
                    value=""
                    onChange={handleConfirmPasswordInput}
                  ></input>
                  <div className="chakra-input__right-element css-1qww07b">
                    <button type="button" className="chakra-button css-1xgetim">
                      Show
                    </button>
                  </div>
                </div>
              </div>
              <button type="submit" className="submit-registration" onClick={signupUser}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="css-0">
        Have an account? {" "}
        <Link to={"/login"} className="login-button">
            Login
        </Link>
      </div>
    </div>


    )
}