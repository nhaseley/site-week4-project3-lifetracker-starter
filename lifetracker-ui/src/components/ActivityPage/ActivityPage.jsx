import * as React from "react";
import "./ActivityPage.css";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


export default function ActivityPage({ userLoggedIn, averageCalories, setAverageCalories, nutritions, setNutritions, userData, exercises, setExercises, setTotalExerciseDuration, totalExerciseDuration, setSleeps, sleeps, averageHours, setAverageHours }) {
  useEffect(() => 
    async function showNutritions(){
      console.log("checking user id?? :", userData)
      let result = await axios.post("http://localhost:3001/auth/nutrition", {
        user_id: userData.id
      });
      
      if (((result.status === 201) || (result.data.status === 200)) && (result.data.nutritionList)){ 
        setNutritions([result.data.nutritionList])
        console.log("nutritions from post", result.data.nutritionList)
      }
    }, []
  )
  
  useEffect(() => 
    function calculateAverageCalories(){
      const uniqueDates = [...new Set(nutritions[0]?.map(obj => new Date(obj.created_at).toLocaleDateString()))];
      const numDays = uniqueDates.length;
      const totalCalories = nutritions[0]?.reduce((sum, obj) => sum + obj.calories, 0);
      setAverageCalories(totalCalories / numDays);
    }, []
  )
  console.log("averageCalories: ", averageCalories)

  useEffect(() => 
    async function showExercises(){
      // console.log("checking user id?? in exercise :", userData)
      let result = await axios.post("http://localhost:3001/auth/exercise", {  
        user_id: userData.id
      });
      if (((result.status === 201) || (result.data.status === 200)) && (result.data.exerciseList)){ 
        setExercises([result.data.exerciseList])
        console.log("exercises from post: ", result.data.exerciseList)
      }
    }, []
  )

  useEffect(() => 
    function calculateTotalExerciseDuration(){
      const totalDuration = exercises.reduce((total, exercise) => total + exercise.duration, 0);
      setTotalExerciseDuration(totalDuration)
    }, []
  )
  // console.log("total exercise duration: ", totalExerciseDuration)

  useEffect(() => 
  async function showSleeps(){
    // console.log("checking user id?? in sleep :", userData)
    let result = await axios.post("http://localhost:3001/auth/sleep", {  
      user_id: userData.id
    });
    if (((result.status === 201) || (result.data.status === 200)) && (result.data.sleepList)){ 
      setSleeps([result.data.sleepList])
      // console.log("sleeps from post: ", result.data.sleepList)
    }
  }, []
)

useEffect(() => 
    function calculateAverageHoursofSleep(){
      // const totalDuration = exercises.reduce((total, exercise) => total + exercise.duration, 0);
      // setTotalExerciseDuration(totalDuration)
    }, []
  )


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
                    <p className="chakra-text css-51dhyc">60.0</p>
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
                    <p className="chakra-text css-51dhyc">0.0</p>
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
                        <dd className="chakra-stat__number css-1axeus7">0.0</dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Average Exercise Intensity
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">1.0</dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Total Number of Hours Slept
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">0.0</dd>
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
