import * as React from "react";
import "./RegistrationPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegistrationPage({
  userLoginInfo,
  setUserLoginInfo,
  error,
  setError,
  passwordDisplayed,
  handleHidePassword,
  handleShowPassword
}) {

  async function signupUser(event) {
    event.preventDefault();
    if (userLoginInfo.confirmPassword !== userLoginInfo.password) {
      setError({message: "Passwords do not match", status: 422})
    } else {
      let result = await axios.post("http://localhost:3001/auth/register", {
        emailInput: userLoginInfo.email,
        usernameInput: userLoginInfo.username,
        passwordInput: userLoginInfo.password,
        firstNameInput: userLoginInfo.firstName,
        lastNameInput: userLoginInfo.lastName,
      });
      console.log("login result: ", result);

      if (result.data.status) {
        setError(result.data);
      } else {
        console.log("successful registration");
        setError({});
        setUserLoginInfo({email: "", username: "", firstName: "", lastName: "", password: "", confirmPassword:""})
      }
    }
  }

  function handleDemo(){
    setUserLoginInfo({email: "nya@gmail.com", username:"nya", firstName: "nya", lastName: "haseley-ayende", password: "nya", confirmPassword: "nya" })
  }

  return (
    <div className="registration-page">
      <div className="registration-form">
        <span className="chakra-avatar css-3fy9wq">
          <img
            src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
            className="user-profile-img"
          ></img>
        </span>
        <h2 className="chakra-heading css-3q8efk">Create an Account</h2>
        <div className="css-ebzegt">
          <form>
            <div className="chakra-stack css-1db3zf7">
              <div role="group" className="form-input">
                <div
                  className="chakra-input__group css-bx0blc"
                  data-group="true"
                >
                  <div className="chakra-input__left-element css-1cw84h2">
                    <img
                      src="https://www.transparentpng.com/download/send-email-button/DyZNCL-send-email-button-free-download-transparent.png"
                      className="email-img"
                    ></img>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="chakra-input css-1aepka5"
                    value={userLoginInfo.email}
                    onChange={(e) => setUserLoginInfo((u) => ({...u, email: e.target.value}))}
                  ></input>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div
                  className="chakra-input__group css-bx0blc"
                  data-group="true"
                >
                  <div className="chakra-input__left-element css-1cw84h2">
                    <img
                      src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
                      className="username-img"
                    ></img>
                  </div>
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="chakra-input css-1aepka5"
                    value={userLoginInfo.username}
                    onChange={(e) => setUserLoginInfo((u) => ({...u, username: e.target.value}))}
                  ></input>
                </div>
              </div>
              <div className="names">
                <div role="group" className="chakra-form-control css-1kxonj9">
                  <div
                    className="chakra-input__group css-bx0blc"
                    data-group="true"
                  >
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="chakra-input css-1aepka5"
                      value={userLoginInfo.firstName}
                      onChange={(e) => setUserLoginInfo((u) => ({...u, firstName: e.target.value}))}
                    ></input>
                  </div>
                </div>
                <div role="group" className="chakra-form-control css-1kxonj9">
                  <div
                    className="chakra-input__group css-bx0blc"
                    data-group="true"
                  >
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="chakra-input css-1aepka5"
                      value={userLoginInfo.lastName}
                      onChange={(e) => setUserLoginInfo((u) => ({...u, lastName: e.target.value}))}
                    ></input>
                  </div>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div
                  className="chakra-input__group css-bx0blc"
                  data-group="true"
                >
                  <div className="chakra-input__left-element css-17ke578">
                    <img
                      src="https://www.pngitem.com/pimgs/m/140-1407340_lock-icon-clipart-png-download-white-login-password.png"
                      className="password-img"
                    ></img>
                  </div>
                  <input
                    name="password"
                    type = {passwordDisplayed.password ? "text": "password"}
                    placeholder="Password"
                    className="chakra-input css-1fwij33"
                    value={userLoginInfo.password}
                    onChange={(e) => setUserLoginInfo((u) => ({...u, password: e.target.value}))}
                  ></input>
                  <div className="chakra-input__right-element css-1qww07b">
                  <button 
                    name="password-toggle"
                    type="button" 
                    className="chakra-button css-1xgetim" 
                    onClick={passwordDisplayed.password ? handleHidePassword : handleShowPassword}>
                    {passwordDisplayed.password ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>
              <div role="group" className="chakra-form-control css-1kxonj9">
                <div
                  className="chakra-input__group css-bx0blc"
                  data-group="true"
                >
                  <div className="chakra-input__left-element css-17ke578">
                    <img
                      src="https://www.pngitem.com/pimgs/m/140-1407340_lock-icon-clipart-png-download-white-login-password.png"
                      className="password-img"
                    ></img>
                  </div>
                  <input
                    name="passwordConfirm"
                    type = {passwordDisplayed.confirmPassword ? "text": "password"}
                    placeholder="Confirm Password"
                    className="chakra-input css-1fwij33"
                    value={userLoginInfo.confirmPassword}
                    onChange={(e) => setUserLoginInfo((u) => ({...u, confirmPassword: e.target.value}))}
                  ></input>
                  <div className="chakra-input__right-element css-1qww07b">
                  <button 
                    name="confirm-password-toggle"
                    type="button" 
                    className="chakra-button css-1xgetim" 
                    onClick={passwordDisplayed.confirmPassword ? handleHidePassword: handleShowPassword}>
                    {passwordDisplayed.confirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div className="error">
                  {error.status
                    ? "Registration Failed: " +
                      error.message +
                      ". " +
                      error.status +
                      " Error."
                    : null}
                </div>
              </div>
              <button
                type="submit"
                className="submit-registration"
                onClick={signupUser}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="css-0">
        Have an account?{" "}
        <Link to={"/login"} className="login-button">
          Login
        </Link>
      </div>
      <button className="demo-button" onClick={handleDemo}> Demo Registration</button>
    </div>
  );
}
