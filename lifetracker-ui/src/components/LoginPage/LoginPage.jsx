import * as React from "react";
import { useEffect } from "react"
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityPage from "../ActivityPage/ActivityPage";
import jwtDecode from "jwt-decode";

export default function LoginPage({
  userLoginInfo,
  setUserLoginInfo,
  error,
  setError,
  passwordDisplayed,
  handleShowPassword,
  handleHidePassword,
  setUserLoggedIn,
  userLoggedIn,
  tokenFirstName,
  setTokenFirstName
}) {

  useEffect(() => {
    const checkLoggedIn = () => {
    // check if user is already logged in when they first access the webapp
    const token = localStorage.getItem("token");
    if (token){ 
      const decodedToken = jwtDecode(token);
      setTokenFirstName(decodedToken.firstName)
      if (decodedToken.exp * 1000 > Date.now()){
        setUserLoggedIn(true)
      } else {
        // Token has expired, log out the user
        handleLogout();
      }
    }
}; 
}, [])

 

  async function loginUser(event) {
    event.preventDefault();

    let result = await axios.post("http://localhost:3001/auth/login", {
      emailInput: userLoginInfo.email,
      passwordInput: userLoginInfo.password,
    });
    console.log("login result: ", result)

    if (result.data.status) {
      console.log("this login failed!");
      setError(result.data);
    } else {
      console.log("successful log in");
      const token = result.data.token;

      localStorage.setItem("token", token)
      const decodedToken = jwtDecode(token);
      setTokenFirstName(decodedToken.firstName)

      setUserLoginInfo({email: "", password: ""})
      setError({});
      setUserLoggedIn(true)
      console.log("Welcome, ", decodedToken.firstName, "!")
      // return <ActivityPage/>
    }
  }

  function handleDemo(){
    setUserLoginInfo({email: "nya@gmail.com", password: "nya"})
  }
  console.log(userLoggedIn)
  // if (userLoggedIn){
  //   return <ActivityPage/>
  // }

  return (

    <div > Here we are logged in as: {tokenFirstName} 
    <div className="login-page">

      <div className="login-form">
        <span className="chakra-avatar css-3fy9wq">
          <img
            src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
            className="user-profile-img"
          ></img>
        </span>
        <h2 className="chakra-heading css-3q8efk">Welcome Back</h2>
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
                    in
                    className="chakra-input css-1aepka5"
                    value={userLoginInfo.email}
                    onChange={(e) => setUserLoginInfo((u) => ({...u, email: e.target.value}))}
                  ></input>
                </div>
              </div>
              <div role="group" className="form-input">
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
                    name = "password-toggle"
                    type="button" 
                    className="chakra-button css-1xgetim" 
                    onClick={passwordDisplayed.password ? handleHidePassword : handleShowPassword}>
                    {passwordDisplayed.password ? "Hide" : "Show"}
                    </button>
                    <br></br>
                  </div>
                </div>
                <div className="error">
                  {error.status ? "Login Failed: " + error.message  + ". " + error.status + " Error." : null}
                </div>
              </div>
              <button
                type="submit"
                className="submit-login"
                onClick={loginUser}
              >
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
      <button className="demo-button" onClick={handleDemo}> Demo Login</button>
    </div>
    </div>
  );
}
