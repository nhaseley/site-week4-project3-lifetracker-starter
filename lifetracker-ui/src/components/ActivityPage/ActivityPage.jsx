import * as React from "react";
import "./ActivityPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function ActivityPage({
  userLoggedIn,

  averageCalories,
  setAverageCalories,
  weeklyCalories,
  setWeeklyCalories,
  monthlyCalories,
  setMonthlyCalories,
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

  useEffect(() => {
    showNutritions();
    showExercises();
    showSleeps();

    calculateSummaryStatistics();
  }, []);

  async function calculateSummaryStatistics() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      let summaryStatistics = await axios.post("http://localhost:3001/auth/activity", {
        token: existingToken,
      });
      setAverageCalories(summaryStatistics.data.nutrition.perDay);
      setWeeklyCalories(summaryStatistics.data.nutrition.perWeek);
      setMonthlyCalories(summaryStatistics.data.nutrition.perMonth);
      setMaxCaloriesInMeal(summaryStatistics.data.nutrition.maxCals);

      setTotalExerciseDuration(summaryStatistics.data.exercise.totalDuration);
      setAverageExerciseIntensity(summaryStatistics.data.exercise.avgIntensity)

      setAverageHoursSleep(summaryStatistics.data.sleep.avgHours);
      setTotalHoursSlept(summaryStatistics.data.sleep.totalHours);
    }
  }
 
  // ----------------- Nutrition --------------------- //
 
  async function showNutritions() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/nutrition", {
          token: existingToken,
        })
        .then((userInfo) => {
          setNutritions(userInfo.data.nutritionList);
        });
    } else {
      console.log("Token expired. Please log in again.");
    }
  }
  // ----------------- Exercise --------------------- //

  async function showExercises() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/exercise", {
          token: existingToken,
        })
        .then((userInfo) => {
          setExercises(userInfo.data.exerciseList);
        });
    } else {
      console.log("Token expired. Please log in again.");
    }
  }

  // ----------------- Sleep --------------------- //

  async function showSleeps() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      axios
        .post("http://localhost:3001/sleep", {
          token: existingToken,
        })
        .then((userInfo) => {
          setSleeps(userInfo.data.sleepList);
        });
    } else {
      console.log("Token expired. Please log in again.");
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
                    <p className="stat">
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
                    <p className="stat">
                      {averageHoursSleep}
                    </p>
                    <div className="chakra-stack css-tl3ftk">
                      <span className="chakra-badge css-1bbbzfs">-2.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="per-day">
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
                    <p className="stat">{averageCalories}</p>
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
                <div > Weekly Calories: {weeklyCalories}</div>
                <div > Monthly Calories: {monthlyCalories}</div>
                <div className="css-0">
                  <div role="group" className="chakra-stat__group css-fxvpvo">
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Max Calories In One Meal
                        </dt>
                        <dd className="mini-stat">
                          {maxCaloriesInMeal}
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Average Exercise Intensity
                        </dt>
                        <dd className="mini-stat">
                          {averageExerciseIntensity}
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Total Number of Hours Slept
                        </dt>
                        <dd className="mini-stat">
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
