import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionNew from "../NutritionPage/NutritionNew";
import SleepNew from "../SleepPage/SleepNew";
import ExerciseNew from "../ExercisePage/ExerciseNew";

function App() {
// ---- states ----
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState({})
  const [passwordDisplayed, setPasswordDisplayed] = useState({password:false, confirmPassword: false})
  const [userLoggedIn, setUserLoggedIn] = useState(false)

// ---- functions ----
  function handleShowPassword(event){
    event.target.name === "password-toggle" ? setPasswordDisplayed({password: true, confirmPassword: passwordDisplayed.confirmPassword}): setPasswordDisplayed({password: passwordDisplayed.password, confirmPassword: true})
  }
  function handleHidePassword(event){
    event.target.name === "password-toggle" ? setPasswordDisplayed({password: false, confirmPassword: passwordDisplayed.confirmPassword}): setPasswordDisplayed({password: passwordDisplayed.password, confirmPassword: false})
  }

// ---- return object ----
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>}>
            <Route path="/" element={<Landing />}></Route>

            <Route
              path="/login"
              element={
                <LoginPage
                  userLoginInfo={userLoginInfo}
                  setUserLoginInfo={setUserLoginInfo}
                  error={error}
                  setError={setError}
                  passwordDisplayed={passwordDisplayed}
                  handleShowPassword={handleShowPassword}
                  handleHidePassword={handleHidePassword}
                  setUserLoggedIn={setUserLoggedIn}
                  userLoggedIn={userLoggedIn}
                />
              }
            />

            <Route
              path="/register"
              element={
                <RegistrationPage   
                  userLoginInfo={userLoginInfo}
                  setUserLoginInfo={setUserLoginInfo}
                  error={error}
                  setError={setError}
                  passwordDisplayed={passwordDisplayed}
                  handleShowPassword={handleShowPassword}
                  handleHidePassword={handleHidePassword}
                  setUserLoggedIn={setUserLoggedIn}
                />
              }
            ></Route>
            <Route path="/activity" element={<ActivityPage userLoggedIn={userLoggedIn}/>}></Route>

            <Route path="/nutrition/*" element={<NutritionPage userLoggedIn={userLoggedIn}/>}></Route>
            <Route path="/nutrition/create" element={<NutritionNew />}></Route>

            <Route path="/sleep" element={<SleepPage userLoggedIn={userLoggedIn}/>}></Route>
            <Route path="/sleep/create" element={<SleepNew />}></Route>

            <Route path="/exercise" element={<ExercisePage userLoggedIn={userLoggedIn}/>}></Route>
            <Route path="/exercise/create" element={<ExerciseNew />}></Route>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
