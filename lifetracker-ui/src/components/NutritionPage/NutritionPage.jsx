import * as React from "react";
import "./NutritionPage.css";
import { Link } from "react-router-dom";
import NutritionNew from "./NutritionNew";

export default function NutritionPage({ userLoggedIn }) {
  return (
    <div className="NutritionPage css-1bpnzr3">
      <div className="css-1ef7k5z">
        <div className="chakra-stack css-1cgbrw5">
          <h2 className="chakra-heading css-b5coes">Nutrition</h2>
        </div>
      </div>

      {!userLoggedIn ? (
        <div className="css-vpbd2d">
          <div className="css-1qfrez2">
            <div className="css-uiodal">
              <div className="nutrition-feed">
                <div className="css-0">
                  <div className="css-j7qwjs">
                    <h2 className="chakra-heading css-hzsul0">
                      Nothing here yet.
                    </h2>
                    <button type="button" className="chakra-button css-ez23ye">
                      <Link
                        to={"/nutrition/create"}
                        className="record-nutrition-button"
                      >
                        
                        Record Nutrition
                      </Link>
                    </button>
                    <img
                      src="https://lifetracker-ui-ai8e.onrender.com/assets/empty-fridge-a47d4d66.jpg"
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
              <div className="nutrition-feed">
                <div className="chakra-link button css-spn4bz">
                  <button type="button" className="chakra-button css-ez23ye">
                    <Link
                      to={"/nutrition/create"}
                      className="record-nutrition-button"
                    >
                      
                      Add Nutrition
                    </Link>
                  </button>
                </div>
                <div className="chakra-stack css-xixnl8">
                  <span className="css-89mcmc">Today at 1:35 PM</span>
                  <div className="css-2plr3x">
                    <div className="css-56yjmq">
                      <span className="chakra-avatar css-en15ln">
                        <div
                          role="img"
                          aria-label="d"
                          className="chakra-avatar__initials css-1ebyn6"
                        >
                          d
                        </div>
                      </span>
                      <div className="css-1kw2fa0">
                        <h2 className="chakra-heading css-y5314g">
                          d
                          <span className="chakra-badge css-lvvibp">snack</span>
                        </h2>
                      </div>
                    </div>
                    <div className="white css-1lekzkb">
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Calories
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">
                            10
                          </dd>
                        </dl>
                      </div>
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Quantity
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">3</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chakra-stack css-xixnl8">
                  <span className="css-89mcmc">Today at 1:34 PM</span>
                  <div className="css-2plr3x">
                    <div className="css-56yjmq">
                      <span className="chakra-avatar css-en15ln">
                        <div
                          role="img"
                          aria-label="david"
                          className="chakra-avatar__initials css-1ebyn6"
                        >
                          d
                        </div>
                      </span>
                      <div className="css-1kw2fa0">
                        <h2 className="chakra-heading css-y5314g">
                          david
                          <span className="chakra-badge css-lvvibp">food</span>
                        </h2>
                      </div>
                    </div>
                    <div className="white css-1lekzkb">
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Calories
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">
                            40
                          </dd>
                        </dl>
                      </div>
                      <div className="chakra-stat css-1mbo1ls">
                        <dl>
                          <dt className="chakra-stat__label css-14go5ty">
                            Quantity
                          </dt>
                          <dd className="chakra-stat__number css-1axeus7">4</dd>
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
