import * as React from "react";
import "./SleepPage.css";
import { Link } from "react-router-dom";
import SleepCard from "./SleepCard"

export default function SleepPage({ userLoggedIn, sleeps }) {
  return (
    <div className="SleepPage css-1bpnzr3">
      {!userLoggedIn ? (
        <div className="please-log-in">
          <div className="please-log-in-message">
            Please log in to see your data.
          </div>
        </div>
      ) : (
        <>
          <div className="css-k2eq80">
            <div className="chakra-stack css-1cgbrw5">
              <h2 className="chakra-heading css-b5coes">Sleep</h2>
            </div>
          </div>
          {sleeps.length == 0 ? (
            <div className="css-vpbd2d">
              <div className="css-1qfrez2">
                <div className="css-uiodal">
                  <div className="sleep-feed">
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
                            to={"/sleep/create"}
                            className="record-sleep-button"
                          >
                            Record Sleep
                          </Link>
                        </button>
                        <img
                          src="https://lifetracker-ui-ai8e.onrender.com/assets/empty-bed-b93e7358.jpg"
                          className="chakra-image css-ni3ua3"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="css-1qfrez2">
              <div className="css-uiodal">
                <div className="sleep-feed">
                  <button type="button" className="chakra-button css-ez23ye">
                    <Link to={"/sleep/create"} className="record-sleep-button">
                      Add Sleep
                    </Link>
                  </button>

                  {sleeps?.map((item) => (
                    <SleepCard item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
