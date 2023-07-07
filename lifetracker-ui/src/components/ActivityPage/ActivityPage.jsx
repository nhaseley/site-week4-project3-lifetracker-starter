import * as React from "react";
import "./ActivityPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ActivityPage({
  userLoggedIn,

  averageCalories,
  setAverageCalories,
  setNutritions,
  maxCaloriesInMeal,
  setMaxCaloriesInMeal,

  totalExerciseDuration,
  setTotalExerciseDuration,
  setExercises,
  averageExerciseIntensity,
  setAverageExerciseIntensity,

  averageHoursSleep,
  setAverageHoursSleep,
  setSleeps,
  totalHoursSlept,
  setTotalHoursSlept,
}) {
  // ----------------- Nutrition Statistics --------------------- //
  useEffect(() => {
    showNutritions();
    calculateAverageCalories();
    calculateMaxCaloriesInMeal();

    showExercises();
    showSleeps();
  }, []);

  async function showNutritions() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/auth/nutrition", {
          token: existingToken,
        })
        .then((userInfo) => {
          setNutritions(userInfo.data.nutritionList);
          // calculateAverageCalories(userInfo.data.nutritionList);
          // getMaxCaloriesInMeal(userInfo.data.nutritionList);
        });
    } else {
      alert("Token expired. Please log in again.");
    }
  }
  
  async function calculateAverageCalories() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let summaryStatistics = await axios.post("http://localhost:3001/auth/activity", {
        token: existingToken,
      });
      setAverageCalories(summaryStatistics.data.nutrition.perDay);
    }
  }

  async function calculateMaxCaloriesInMeal() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let summaryStatistics = await axios.post("http://localhost:3001/auth/activity", {
        token: existingToken,
      });
      setMaxCaloriesInMeal(summaryStatistics.data.nutrition.maxCals);
    }
  }

  // ----------------- Exercise Statistics --------------------- //

  async function calculateTotalExerciseDuration() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let summaryStatistics = await axios.post("http://localhost:3001/auth/activity", {
        token: existingToken,
      });
      console.log("summary statistics: ", summaryStatistics.data)
      setTotalExerciseDuration(summaryStatistics.data.exercise.totalDuration);
    }
  }
  useEffect(() => {
    calculateTotalExerciseDuration();
  }, []);

  function calculateAverageExerciseIntensity(exerciseList) {
    if (exerciseList.length === 0) {
      return 0; // No exercises in the array
    }
    const totalIntensity = exerciseList.reduce((sum, exercise) => {
      return sum + exercise.intensity;
    }, 0);
    setAverageExerciseIntensity(
      Math.round(totalIntensity / exerciseList.length)
    );
  }

  async function showExercises() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/auth/exercise", {
          token: existingToken,
        })
        .then((userInfo) => {
          setExercises(userInfo.data.exerciseList);
          console.log("exerciselist: ", userInfo.data.exerciseList)
          // calculateTotalExerciseDuration(userInfo.data.exerciseList);
          calculateAverageExerciseIntensity(userInfo.data.exerciseList);
        });
    } else {
      alert("Token expired. Please log in again.");
    }
  }

  // ----------------- Sleep Statistics --------------------- //

  async function calculateAverageHoursofSleep() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let summaryStatistics = await axios.post("http://localhost:3001/auth/activity", {
        token: existingToken,
      });
      // console.log("summary statistics: ", summaryStatistics.data)
      setAverageHoursSleep(summaryStatistics.data.sleep.averageSleepHours);
    }
  }
  useEffect(() => {
    calculateAverageHoursofSleep();
  }, []);

  function calculateTotalHoursSlept(sleepList) {
    const totalSleepHours = sleepList.reduce((total, entry) => {
      const startTime = new Date(entry.starttime);
      const endTime = new Date(entry.endtime);
      const sleepDuration = (endTime - startTime) / (1000 * 60 * 60); // Convert milliseconds to hours
      return total + sleepDuration;
    }, 0);

    setTotalHoursSlept(Math.round(totalSleepHours));
  }
  async function showSleeps() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/auth/sleep", {
          token: existingToken,
        })
        .then((userInfo) => {
          setSleeps(userInfo.data.sleepList);
          // console.log("SleepList: ", userInfo.data.sleepList);

          calculateAverageHoursofSleep(userInfo.data.sleepList);
          calculateTotalHoursSlept(userInfo.data.sleepList);
        });
    } else {
      alert("Token expired. Please log in again.");
    }
  }

  // ----------------- Return Object --------------------- //

  return (
    <div className="activity-page">
      {!userLoggedIn ? (
        <div className="please-log-in">
          <div className="please-log-in-message">
            Please log in to see your data.
          </div>
        </div>
      ) : (
        <div className="activity-feed">
          <div className="chakra-stack css-12mzq72">
            <h2 className="chakra-heading css-1jb3vzl">Activity Feed</h2>
            <div
              className="chakra-stack css-1qwhsm9"
              style={{ marginLeft: "auto" }}
            >
              <button type="button" className="chakra-button css-moltat">
                <Link to={"/exercise"} className="add-exercise-button">
                  Add Exercise
                </Link>
              </button>
              <button type="button" className="chakra-button css-l6faz9">
                <Link to={"/sleep"} className="add-sleep-button">
                  Log Sleep
                </Link>
              </button>
              <button type="button" className="chakra-button css-n3canj">
                <Link to={"/nutrition"} className="add-nutrition-button">
                  Log Nutrition
                </Link>
              </button>
            </div>
          </div>
          <div className="grid">
            <div className="css-18qrtb8">
              <div className="css-xkuesw">
                <div className="chakra-stack css-12mzq72">
                  <div className="chakra-stack css-8g8ihq">
                    <h2 className="chakra-heading css-18j379d">
                      Total Exercise Minutes
                    </h2>
                    <h2 className="chakra-heading css-1gipxey"></h2>
                  </div>
                  <div
                    className="chakra-stack css-1qwhsm9"
                    style={{ marginLeft: "auto" }}
                  ></div>
                </div>
                <div className="css-0">
                  <div className="css-1lekzkb">
                    <p className="chakra-text css-51dhyc">
                      {totalExerciseDuration}
                    </p>
                    <div className="chakra-stack css-tl3ftk">
                      <span className="chakra-badge css-1g1qw76">+2.5%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="css-1k6gjzc">
                <div className="chakra-stack css-12mzq72">
                  <div className="chakra-stack css-8g8ihq">
                    <h2 className="chakra-heading css-18j379d">
                      Average Hours of Sleep
                    </h2>
                    <h2 className="chakra-heading css-1gipxey"></h2>
                  </div>
                  <div
                    className="chakra-stack css-1qwhsm9"
                    style={{ marginLeft: "auto" }}
                  ></div>
                </div>
                <div className="css-0">
                  <div className="css-1lekzkb">
                    <p className="chakra-text css-51dhyc">
                      {averageHoursSleep}
                    </p>
                    <div className="chakra-stack css-tl3ftk">
                      <span className="chakra-badge css-1bbbzfs">-2.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-btgv56">
                <div className="chakra-stack css-12mzq72">
                  <div className="chakra-stack css-8g8ihq">
                    <h2 className="chakra-heading css-18j379d">
                      Average Daily Calories
                    </h2>
                    <h2 className="chakra-heading css-1gipxey"></h2>
                  </div>
                  <div
                    className="chakra-stack css-1qwhsm9"
                    style={{ marginLeft: "auto" }}
                  ></div>
                </div>
                <div className="css-0">
                  <div className="css-1lekzkb">
                    <p className="chakra-text css-51dhyc">{averageCalories}</p>
                    <div className="chakra-stack css-tl3ftk">
                      <span className="chakra-badge css-1g1qw76">+5.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-qr0fjv">
                <div className="chakra-stack css-12mzq72">
                  <div className="chakra-stack css-8g8ihq">
                    <h2 className="chakra-heading css-18j379d">More Stats</h2>
                    <h2 className="chakra-heading css-1gipxey"></h2>
                  </div>
                  <div
                    className="chakra-stack css-1qwhsm9"
                    style={{ marginLeft: "auto" }}
                  ></div>
                </div>
                <div className="css-0">
                  <div role="group" className="chakra-stat__group css-fxvpvo">
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Max Calories In One Meal
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          {maxCaloriesInMeal}
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Average Exercise Intensity
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          {averageExerciseIntensity}
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Total Number of Hours Slept
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          {totalHoursSlept}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="css-8inehh"></div>
        </div>
      )}
    </div>
  );
}
