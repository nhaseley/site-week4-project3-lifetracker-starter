import "./App.css";
import axios from "axios";
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

function App() {
  function handleEmailInput(event){
    setEmailInput(event.target.value);
  }
  function handlePasswordInput(event){
    setPasswordInput(event.target.value);
  }
  
  // function handleUsernameInput() {}
  function handleFirstNameInput() {}
  function handleLastNameInput() {}
  function handleConfirmPasswordInput() {}
  function signupUser() {}
  // function loginUser() {}
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="/" element={<Landing />}></Route>

            <Route
              path="/login"
              element={
                <LoginPage
                  emailInput={emailInput}
                  passwordInput={passwordInput}
                  // setEmailInput={setEmailInput}
                  handleEmailInput={handleEmailInput}
                  handlePasswordInput={handlePasswordInput}
                  // loginUser={loginUser}
                />
              }
            />

            <Route
              path="/register"
              element={
                <RegistrationPage
                  // handleEmailInput={handleEmailInput}
                  // handleUsernameInput={handleUsernameInput}
                  handleFirstNameInput={handleFirstNameInput}
                  handleLastNameInput={handleLastNameInput}
                  handlePasswordInput={handlePasswordInput}
                  handleConfirmPasswordInput={handleConfirmPasswordInput}
                  signupUser={signupUser}
                />
              }
            ></Route>
            <Route path="/activity" element={<ActivityPage />}></Route>
            <Route path="/nutrition/*" element={<NutritionPage />}></Route>
            <Route path="/sleep" element={<SleepPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
