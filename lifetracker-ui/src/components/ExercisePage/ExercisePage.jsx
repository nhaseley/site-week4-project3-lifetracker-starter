import * as React from "react";
import { useEffect } from "react";
import "./ExercisePage.css";
import { Link } from "react-router-dom";
import ExerciseCard from "./ExerciseCard";
import axios from "axios";

export default function ExercisePage({
  userLoggedIn,
  exercises,
  setExercises,
  error,
  setError
}) {
  async function getExerciseInfoFromToken() {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
    
      let userInfo = await axios.post("http://localhost:3001/exercise", {
        token: existingToken,
      });

      if (userInfo.data.exerciseList) {
        setExercises(userInfo.data.exerciseList);
      } else {
        setError({
          message: userInfo.data.message,
          status: userInfo.data.status,
        });
      }
    } else {
      console.log("Token expired. Please log in again.");
    }
  }

  useEffect(() => {
    getExerciseInfoFromToken();
  }, []);

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

          {error.message || exercises.length == 0 ? (
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
                    
                    {exercises?.map((item) => (
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
