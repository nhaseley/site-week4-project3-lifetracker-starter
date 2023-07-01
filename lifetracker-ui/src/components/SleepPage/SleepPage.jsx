import * as React from "react";
import "./SleepPage.css";
import { Link } from "react-router-dom";

export default function SleepPage({userLoggedIn}) {
  return (
    <div className="SleepPage css-1bpnzr3">
      <div className="css-k2eq80">
        <div className="chakra-stack css-1cgbrw5">
          <h2 className="chakra-heading css-b5coes">Sleep</h2>
        </div>
      </div>

      {!userLoggedIn ? (
        <div className="css-vpbd2d">
          <div className="css-1qfrez2">
            <div className="css-uiodal">
              <div className="sleep-feed">
                <div className="css-0">
                  <div className="css-j7qwjs">
                    <h2 className="chakra-heading css-hzsul0">
                      Nothing here yet.
                    </h2>
                    <button type="button" className="chakra-button css-ez23ye">
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
              <div className="chakra-stack css-xixnl8">
                <div className="css-sxxv4f">
                  <div className="css-56yjmq">
                    <span className="chakra-avatar css-en15ln">
                      <div
                        role="img"
                        aria-label="13hr"
                        className="chakra-avatar__initials css-1ebyn6"
                      >
                        1
                      </div>
                    </span>
                    <div className="css-1kw2fa0">
                      <h2 className="chakra-heading css-y5314g">
                        Jul 2nd, 2023
                      </h2>
                    </div>
                  </div>
                  <div className="white css-1lekzkb">
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Start Time
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          9:16 PM
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          End Time
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          10:16 AM
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chakra-stack css-xixnl8">
                <div className="css-sxxv4f">
                  <div className="css-56yjmq">
                    <span className="chakra-avatar css-en15ln">
                      <div
                        role="img"
                        aria-label="147.98333333333332hr"
                        className="chakra-avatar__initials css-1ebyn6"
                      >
                        1
                      </div>
                    </span>
                    <div className="css-1kw2fa0">
                      <h2 className="chakra-heading css-y5314g">
                        Jul 12th, 2023
                      </h2>
                    </div>
                  </div>
                  <div className="white css-1lekzkb">
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          Start Time
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          7:17 PM
                        </dd>
                      </dl>
                    </div>
                    <div className="chakra-stat css-1mbo1ls">
                      <dl>
                        <dt className="chakra-stat__label css-14go5ty">
                          End Time
                        </dt>
                        <dd className="chakra-stat__number css-1axeus7">
                          11:16 PM
                        </dd>
                      </dl>
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
