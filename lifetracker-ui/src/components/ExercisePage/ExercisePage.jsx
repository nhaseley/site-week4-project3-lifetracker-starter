import * as React from "react";
import "./ExercisePage.css";
import { Link } from "react-router-dom";

export default function ExercisePage({userLoggedIn}) {
  return (
    <div className="ExercisePage css-1bpnzr3">
      <div className="css-19cns6y">
        <div className="chakra-stack css-1cgbrw5">
          <h2 className="chakra-heading css-b5coes">Exercise</h2>
        </div>
      </div>

      {!userLoggedIn ? (
        <div className="css-vpbd2d">
          <div className="css-1qfrez2">
            <div className="css-uiodal">
              <div className="exercise-feed">
                <div className="css-0">
                  <div className="css-j7qwjs">
                    <h2 className="chakra-heading css-hzsul0">
                      Nothing here yet.
                    </h2>
                    <button type="button" className="chakra-button css-ez23ye">
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
                  <button type="button" className="chakra-button css-ez23ye">
                    <Link
                      to={"/exercise/create"}
                      className="record-exercise-button"
                    >
                      
                      Add Exercise
                    </Link>
                  </button>
                </div>
                <div className="chakra-stack css-xixnl8">
                  <span className="css-89mcmc">Today at 3:11 PM</span>
                  <div className="css-1d1dt3r">
                    <div className="css-56yjmq">
                      <span className="chakra-avatar css-c6eg9t">
                        <div
                          role="img"
                          aria-label="dx"
                          className="chakra-avatar__initials css-1ebyn6"
                        >
                          d
                        </div>
                      </span>
                      <div className="css-1kw2fa0">
                        <h2 className="chakra-heading css-y5314g">
                          dx
                          <span className="chakra-badge css-lvvibp"></span>
                        </h2>
                      </div>
                    </div>
                    <div className="white css-1lekzkb">
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Duration
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">3</dd>
                        </dl>
                      </div>
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Intensity
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">
                            1/10
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chakra-stack css-xixnl8">
                  <span className="css-89mcmc">Last Wednesday at 9:32 AM</span>
                  <div className="css-1d1dt3r">
                    <div className="css-56yjmq">
                      <span className="chakra-avatar css-faxls7">
                        <div
                          role="img"
                          aria-label="nya"
                          className="chakra-avatar__initials css-1ebyn6"
                        >
                          n
                        </div>
                      </span>
                      <div className="css-1kw2fa0">
                        <h2 className="chakra-heading css-y5314g">
                          nya
                          <span className="chakra-badge css-lvvibp"></span>
                        </h2>
                      </div>
                    </div>
                    <div className="white css-1lekzkb">
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Duration
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">
                            60
                          </dd>
                        </dl>
                      </div>
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Intensity
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">
                            1/10
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
