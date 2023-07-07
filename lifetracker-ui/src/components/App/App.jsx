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
import axios from "axios";

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
  // const [user_id, setUser_Id] = useState();
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

  const [averageCalories, setAverageCalories] = useState(0)

  const [userData, setUserData] = useState({})

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
    setNutritions([])
    setExercises([])
    setUserData({})

  }

///////////////////////////////
  // Token Check
  async function handleUserInfo() {
    const existingToken = localStorage.getItem('token') 
    if (existingToken){
      let userInfo = await axios.post('http://localhost:3001/auth/me', {token: existingToken})
      setUserData(userInfo.data)
    }
  }

  async function showNutritions(){
      console.log("checking user id?? :", userData)
      console.log("about to set nutritions for: ", userData.id)
      // bug - resetting to undefined on reload for a sec^
      if ( userData.id){
      let result = await axios.post("http://localhost:3001/auth/nutrition", {
        user_id: userData.id
      });


      if (((result.status === 201) || (result.data.status === 200)) && (result.data.nutritionList)){ 
        setNutritions([result.data.nutritionList])
        console.log("nooooot", result.data.nutritionList)
      }
    }
    }

    function calculateAverageCalories(){
    
      const uniqueDates = [...new Set(nutritions[0]?.map(obj => new Date(obj.created_at).toLocaleDateString()))];
      const numDays = uniqueDates.length;
    
      const totalCalories = nutritions[0]?.reduce((sum, obj) => sum + obj.calories, 0);
      setAverageCalories(totalCalories / numDays);
    
    }

  useEffect(() => {
    handleUserInfo()
    setUserLoggedIn(true)
    showNutritions()
    // calculateAverageCalories()
  }, [])

console.log("USERDATA:", userData)
/////////////////////////////////////


  // ---- return object ----
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <>
              <h1>{userData.id}</h1>    
              <h1>{userData.email}</h1>
              <Navbar
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
                logoutUser={logoutUser}
              />
              </>
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
                  // setUser_Id={setUser_Id}
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
                  tokenFirstName={tokenFirstName}
                  setTokenFirstName={setTokenFirstName}
                  logoutUser={logoutUser}
                  userLoggedIn={userLoggedIn}
                />
              }
            ></Route>
            <Route
              path="/activity"
              element={<ActivityPage userLoggedIn={userLoggedIn} averageCalories={averageCalories} setAverageCalories={setAverageCalories} nutritions={nutritions}setNutritions={setNutritions} userData={userData}/>}
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
            <Route path="/nutrition/create" element={<NutritionNew nutritionForm={nutritionForm} setNutritionForm={setNutritionForm} userData={userData}/>}></Route>

            <Route
              path="/sleep"
              element={<SleepPage userLoggedIn={userLoggedIn} sleeps={sleeps} />}
            ></Route>
            <Route path="/sleep/create" element={<SleepNew sleeps={sleeps} setSleeps ={setSleeps} sleepForm={sleepForm} setSleepForm={setSleepForm} userData={userData}/>}></Route>

            <Route
              path="/exercise"
              element={<ExercisePage userLoggedIn={userLoggedIn} exercises={exercises} setExercises={setExercises} userData={userData}/>}
            ></Route>
            <Route path="/exercise/create" element={<ExerciseNew exerciseForm={exerciseForm} setExerciseForm={setExerciseForm} userData={userData}/>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
