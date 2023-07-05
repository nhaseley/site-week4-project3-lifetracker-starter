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
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [passwordDisplayed, setPasswordDisplayed] = useState({
    password: false,
    confirmPassword: false,
  });
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [tokenFirstName, setTokenFirstName] = useState();
  
  const [nutritions, setNutritions] = useState([]);
  const [nutritionForm, setNutritionForm] = useState({
    name: "",
    category: "",
    quantity: 0,
    calories: 0,
    imageUrl: "",
  });
  const [exercises, setExercises] = useState([]);
  const [exerciseForm, setExerciseForm] = useState({
    name: "",
    category: "",
    duration: 0,
    intensity: 0,
  });
  const [sleeps, setSleeps] = useState([]);
  const [sleepForm, setSleepForm] = useState({
    startTime: "",
    endTime: "",
  });

  // ---- functions ----
  function handleShowPassword(event) {
    event.target.name === "password-toggle"
      ? setPasswordDisplayed({
          password: true,
          confirmPassword: passwordDisplayed.confirmPassword,
        })
      : setPasswordDisplayed({
          password: passwordDisplayed.password,
          confirmPassword: true,
        });
  }
  function handleHidePassword(event) {
    event.target.name === "password-toggle"
      ? setPasswordDisplayed({
          password: false,
          confirmPassword: passwordDisplayed.confirmPassword,
        })
      : setPasswordDisplayed({
          password: passwordDisplayed.password,
          confirmPassword: false,
        });
  }
  function logoutUser() {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    console.log(userLoggedIn);
  }

  // ---- return object ----
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <Navbar
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
                logoutUser={logoutUser}
              />
            }
          >
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
                  tokenFirstName={tokenFirstName}
                  setTokenFirstName={setTokenFirstName}
                  logoutUser={logoutUser}
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
                  tokenFirstName={tokenFirstName}
                  setTokenFirstName={setTokenFirstName}
                  logoutUser={logoutUser}
                  userLoggedIn={userLoggedIn}
                />
              }
            ></Route>
            <Route
              path="/activity"
              element={<ActivityPage userLoggedIn={userLoggedIn} />}
            ></Route>

            <Route
              path="/nutrition/*"
              element={
                <NutritionPage
                  userLoggedIn={userLoggedIn}
                  nutritions={nutritions}
                />
              }
            ></Route>
            <Route path="/nutrition/create" element={<NutritionNew nutritions={nutritions} setNutritions={setNutritions} nutritionForm={nutritionForm} setNutritionForm={setNutritionForm}/>}></Route>

            <Route
              path="/sleep"
              element={<SleepPage userLoggedIn={userLoggedIn} sleeps={sleeps} />}
            ></Route>
            <Route path="/sleep/create" element={<SleepNew sleeps={sleeps} setSleeps ={setSleeps} sleepForm={sleepForm} setSleepForm={setSleepForm}/>}></Route>

            <Route
              path="/exercise"
              element={<ExercisePage userLoggedIn={userLoggedIn} exercises={exercises}/>}
            ></Route>
            <Route path="/exercise/create" element={<ExerciseNew exercises={exercises} setExercises={setExercises} exerciseForm={exerciseForm} setExerciseForm={setExerciseForm} />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
