import * as React from "react";
import "./NutritionPage.css";
import { Link } from "react-router-dom";
import NutritionCard from "./NutritionCard";

export default function NutritionPage({
  userLoggedIn,
  nutritions,
}) {
  console.log("nutritions: ", nutritions);
  return (
    <div className="NutritionPage nutrition-page">
      {!userLoggedIn ? (
        <div className="please-log-in">
          <div className="please-log-in-message">
            Please log in to see your data.
          </div>
        </div>
      ) : (
        <>
          <div className="css-1ef7k5z">
            <div className="chakra-stack css-1cgbrw5">
              <h2 className="chakra-heading css-b5coes">Nutrition</h2>
            </div>
          </div>

          {nutritions.length == 0 ? (
            <div className="css-vpbd2d">
              <div className="css-1qfrez2">
                <div className="css-uiodal">
                  <div className="nutrition-feed">
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
                      <button
                        type="button"
                        className="chakra-button css-ez23ye"
                      >
                        <Link
                          to={"/nutrition/create"}
                          className="record-nutrition-button"
                        >
                          Add Nutrition
                        </Link>
                      </button>
                    </div>

                    {nutritions?.map((item) => (
                      <NutritionCard item={item}/>
                      
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
