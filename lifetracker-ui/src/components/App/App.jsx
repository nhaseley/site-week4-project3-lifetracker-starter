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
    // id: 1,
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [user_id, setUser_Id] = useState();
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
    localStorage.removeItem("token")
    setUserLoggedIn(false)
    console.log("logged in? :", userLoggedIn)
    setNutritions([])
    setExercises([])
    setUser_Id()
  }

  console.log("USER ID FROM APP: ", user_id)

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
                  setUser_Id={setUser_Id}
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
                  user_id={user_id}
                  setNutritions={setNutritions}
                />
              }
            ></Route>
            <Route path="/nutrition/create" element={<NutritionNew nutritionForm={nutritionForm} setNutritionForm={setNutritionForm} user_id={user_id}/>}></Route>

            <Route
              path="/sleep"
              element={<SleepPage userLoggedIn={userLoggedIn} sleeps={sleeps} />}
            ></Route>
            <Route path="/sleep/create" element={<SleepNew sleeps={sleeps} setSleeps ={setSleeps} sleepForm={sleepForm} setSleepForm={setSleepForm} user_id={user_id}/>}></Route>

            <Route
              path="/exercise"
              element={<ExercisePage userLoggedIn={userLoggedIn} exercises={exercises} setExercises={setExercises} user_id={user_id}/>}
            ></Route>
            <Route path="/exercise/create" element={<ExerciseNew exerciseForm={exerciseForm} setExerciseForm={setExerciseForm} user_id={user_id}/>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
