import * as React from "react";
import {useEffect} from "react";
import "./ExercisePage.css";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import axios from "axios";

export default function ExercisePage({ userLoggedIn, exercises, setExercises, userData}) {
    useEffect(() => 
    async function showExercises(){
      let result = await axios.post("http://localhost:3001/auth/exercise", {  
        user_id: userData.id
      });
      if (((result.status === 201) || (result.data.status === 200)) && (result.data.exerciseList)){ 
        // successful post
        setExercises([result.data.exerciseList])
      }
    }, []
  )

  return (
    <div className="ExercisePage css-1bpnzr3">
      {!userLoggedIn ? (
        <div className="please-log-in">
          <div className="please-log-in-message">
            Please log in to see your data.
          </div>
        </div>
      ) : (
        <>
          <div className="css-19cns6y">
            <div className="chakra-stack css-1cgbrw5">
              <h2 className="chakra-heading css-b5coes">Exercise</h2>
            </div>
          </div>

          {exercises.length == 0 ? (
            <div className="css-vpbd2d">
              <div className="css-1qfrez2">
                <div className="css-uiodal">
                  <div className="exercise-feed">
                    <div className="css-0">
                      <div className="css-j7qwjs">
                        <h2 className="chakra-heading css-hzsul0">
                          Nothing here yet.
                        </h2>
                        <button
                          type="button"
                          className="chakra-button css-ez23ye"
                        >
                          <Link
                            to={"/exercise/create"}
                            className="record-exercise-button"
                          >
                            Record Exercise
                          </Link>
                        </button>
                        <img
                          src="https://lifetracker-ui-ai8e.onrender.com/assets/bikepath-ebe31266.jpg"
                          className="chakra-image css-ni3ua3"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="css-vpbd2d">
              <div className="css-1qfrez2">
                <div className="css-uiodal">
                  <div className="exercise-feed">
                    <div className="chakra-link button css-spn4bz">
                      <button
                        type="button"
                        className="chakra-button css-ez23ye"
                      >
                        <Link
                          to={"/exercise/create"}
                          className="record-exercise-button"
                        >
                          Add Exercise
                        </Link>
                      </button>
                    </div>
                    {exercises[0]?.map((item) => (
                      <ExerciseCard item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
