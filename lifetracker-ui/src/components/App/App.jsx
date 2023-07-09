import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
import UsersPage from "../UsersPage/UsersPage";
import ProductDetail from "../ProductDetail/ProductDetail";

function App() {
  // ----------------- States --------------------- //
  const [userLoginInfo, setUserLoginInfo] = useState({
    // id: 1,
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

  // ---- nutrition component ----
  const [nutritions, setNutritions] = useState([]);
  const [nutritionForm, setNutritionForm] = useState({
    name: "",
    category: "",
    quantity: 0,
    calories: 0,
    imageUrl: "",
  });
  const [averageCalories, setAverageCalories] = useState(0);
  const [weeklyCalories, setWeeklyCalories] = useState(0);
  const [monthlyCalories, setMonthlyCalories] = useState(0)
  const [maxCaloriesInMeal, setMaxCaloriesInMeal] = useState(0);

  // ---- exercise component ----
  const [exercises, setExercises] = useState([]);
  const [exerciseForm, setExerciseForm] = useState({
    name: "",
    category: "",
    duration: 0,
    intensity: 0,
  });

  const [totalExerciseDuration, setTotalExerciseDuration] = useState(0);
  const [averageExerciseIntensity, setAverageExerciseIntensity] = useState(0);

  // ---- sleep component ----
  const [sleeps, setSleeps] = useState([]);
  const [sleepForm, setSleepForm] = useState({
    startTime: "",
    endTime: "",
  });
  const [averageHoursSleep, setAverageHoursSleep] = useState(0);
  const [totalHoursSlept, setTotalHoursSlept] = useState(0);

  const [userData, setUserData] = useState({});

  // ----------------- Functions --------------------- //
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
    setUserData({});
  }

  // ----------------- Token Check --------------------- //

  async function getUserFromToken() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let userInfo = await axios.post("http://localhost:3001/auth/me", {
        token: existingToken,
      });
      setUserData(userInfo.data);
    }
  }

  useEffect(() => {
    getUserFromToken();
    setUserLoggedIn(true);
  }, []);

  // ----------------- Return Object --------------------- //
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
                  logoutUser={logoutUser}
                  userData={userData}
                  setUserData={setUserData}
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
                  logoutUser={logoutUser}
                  userLoggedIn={userLoggedIn}
                />
              }
            ></Route>
            <Route
              path="/activity"
              element={
                <ActivityPage
                  userLoggedIn={userLoggedIn}
                  averageCalories={averageCalories}
                  setAverageCalories={setAverageCalories}
                  weeklyCalories={weeklyCalories}
                  setWeeklyCalories={setWeeklyCalories}
                  monthlyCalories={monthlyCalories}
                  setMonthlyCalories={setMonthlyCalories}
                  setNutritions={setNutritions}
                  maxCaloriesInMeal={maxCaloriesInMeal}
                  setMaxCaloriesInMeal={setMaxCaloriesInMeal}
                  totalExerciseDuration={totalExerciseDuration}
                  setTotalExerciseDuration={setTotalExerciseDuration}
                  setExercises={setExercises}
                  averageExerciseIntensity={averageExerciseIntensity}
                  setAverageExerciseIntensity={setAverageExerciseIntensity}
                  averageHoursSleep={averageHoursSleep}
                  setAverageHoursSleep={setAverageHoursSleep}
                  setSleeps={setSleeps}
                  totalHoursSlept={totalHoursSlept}
                  setTotalHoursSlept={setTotalHoursSlept}
                />
              }
            ></Route>

            <Route
              path="/nutrition"
              element={
                <NutritionPage
                  userLoggedIn={userLoggedIn}
                  nutritions={nutritions}
                  setNutritions={setNutritions}
                  error={error}
                  setError={setError}
                />
              }
            ></Route>
            <Route
              path="/nutrition/create"
              element={
                <NutritionNew
                  nutritionForm={nutritionForm}
                  setNutritionForm={setNutritionForm}
                  userData={userData}
                />
              }
            ></Route>

            <Route
              path="/sleep"
              element={
                <SleepPage
                  userLoggedIn={userLoggedIn}
                  sleeps={sleeps}
                  setSleeps={setSleeps}
                  error={error}
                  setError={setError}
                />
              }
            ></Route>
            <Route
              path="/sleep/create"
              element={
                <SleepNew
                  sleeps={sleeps}
                  setSleeps={setSleeps}
                  sleepForm={sleepForm}
                  setSleepForm={setSleepForm}
                  userData={userData}
                />
              }
            ></Route>

            <Route
              path="/exercise"
              element={
                <ExercisePage
                  userLoggedIn={userLoggedIn}
                  exercises={exercises}
                  setExercises={setExercises}
                  error={error}
                  setError={setError}
                />
              }
            ></Route>
            <Route
              path="/exercise/create"
              element={
                <ExerciseNew
                  exerciseForm={exerciseForm}
                  setExerciseForm={setExerciseForm}
                  userData={userData}
                  setError={setError}
                  error={error}
                />
              }
            ></Route>
            <Route
              path="/users"
              element={
                <UsersPage error={error} setError={setError}
                />
              }
            ></Route>
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
