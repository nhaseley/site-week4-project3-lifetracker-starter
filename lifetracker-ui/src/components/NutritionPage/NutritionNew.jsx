import * as React from "react";
import "./NutritionNew.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function NutritionNew({
  nutritionForm,
  setNutritionForm,
  userData,
}) {
  
  async function submitNutritionForm() {
    let result = await axios.post(
      "http://localhost:3001/nutrition/create-nutrition",
      {
        user_id: userData.id,
        name: nutritionForm.name,
        category: nutritionForm.category,
        imageUrl: nutritionForm.imageUrl,
        calories: nutritionForm.calories,
        quantity: nutritionForm.quantity,
      }
    );

    setNutritionForm({
      name: "",
      category: "",
      quantity: 0,
      calories: 0,
      imageUrl: "",
    });
  }

  return (
    <div className="NutritionNew">
      <div className="css-vpbd2d">
        <div className="css-0">
          <div className="css-pwgvc2">
            <div className="chakra-stack css-1jtnem3">
              <div className="css-1hv8zgx">
                <div></div>
                <div className="css-mlsaez">
                  <div className="chakra-stack css-13ra036">
                    <h2 className="chakra-heading css-15a3bhq">
                      Record Nutrition
                    </h2>
                    <div className="css-ebzegt">
                      <form>
                        <div className="form-input">
                          <div
                            role="group"
                            className="chakra-form-control css-1kxonj9"
                          >
                            <div
                              className="chakra-input__group css-bx0blc"
                              data-group="true"
                            >
                              <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                id="field-:rr:"
                                required=""
                                aria-required="true"
                                className="chakra-input css-p20xy6"
                                value={nutritionForm.name}
                                onChange={(e) =>
                                  setNutritionForm((u) => ({
                                    ...u,
                                    name: e.target.value,
                                  }))
                                }
                              ></input>
                            </div>
                          </div>
                          <div
                            role="group"
                            className="chakra-form-control css-1kxonj9"
                          >
                            <label
                              id="field-:rs:-label"
                              className="chakra-form__label css-g6pte"
                            >
                              Category
                              <span
                                role="presentation"
                                aria-hidden="true"
                                className="chakra-form__required-indicator css-1tfjd1n"
                              >
                                *
                              </span>
                            </label>
                            <div className="chakra-select__wrapper css-42b2qy">
                              <select
                                name="category"
                                id="field-:rs:"
                                required=""
                                aria-required="true"
                                className="chakra-select css-1gpsbw3"
                                onChange={(e) =>
                                  setNutritionForm((u) => ({
                                    ...u,
                                    category: e.target.value,
                                  }))
                                }
                              >
                                <option value="">Select a category</option>
                                <option value="snack">Snack</option>
                                <option value="beverage">Beverage</option>
                                <option value="food">Food</option>
                              </select>
                              <div className="chakra-select__icon-wrapper css-iohxn1">
                                <svg
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  className="chakra-select__icon"
                                  focusable="false"
                                  aria-hidden="true"
                                  style={{
                                    width: "1em",
                                    height: "1em",
                                    color: "currentcolor",
                                  }}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="css-9jay18">
                            <div
                              role="group"
                              className="chakra-form-control css-1kxonj9"
                            >
                              <label
                                id="field-:rt:-label"
                                className="chakra-form__label css-g6pte"
                              >
                                Quantity
                                <span
                                  role="presentation"
                                  aria-hidden="true"
                                  className="chakra-form__required-indicator css-1tfjd1n"
                                >
                                  *
                                </span>
                              </label>
                              <div
                                value="1"
                                className="chakra-numberinput css-3e5t3k"
                              >
                                <input
                                  name="quantity"
                                  inputMode="decimal"
                                  type="number"
                                  min={1}
                                  max={10000}
                                  pattern="[0-9]*(.[0-9]+)?"
                                  id="field-:rt:"
                                  aria-readonly="false"
                                  aria-required="true"
                                  required=""
                                  role="spinbutton"
                                  aria-valuemin="1"
                                  aria-valuemax="100"
                                  aria-valuenow="1"
                                  aria-valuetext="1"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  className="chakra-numberinput__field css-1551roq"
                                  value={nutritionForm.quantity}
                                  onChange={(e) =>
                                    setNutritionForm((u) => ({
                                      ...u,
                                      quantity: e.target.value,
                                    }))}
                                ></input>
                              </div>
                            </div>
                            &nbsp;
                            <div
                              role="group"
                              className="chakra-form-control css-1kxonj9"
                            >
                              <label
                                id="field-:ru:-label"
                                className="chakra-form__label css-g6pte"
                              >
                                Calories
                                <span
                                  role="presentation"
                                  aria-hidden="true"
                                  className="chakra-form__required-indicator css-1tfjd1n"
                                >
                                  *
                                </span>
                              </label>
                              <div
                                value=""
                                className="chakra-numberinput css-3e5t3k"
                              >
                                <input
                                  name="calories"
                                  inputMode="decimal"
                                  type="number"
                                  min={1}
                                  max={10000}
                                  pattern="[0-9]*(.[0-9]+)?"
                                  id="field-:ru:"
                                  aria-readonly="false"
                                  aria-required="true"
                                  required=""
                                  role="spinbutton"
                                  aria-valuemin="0"
                                  aria-valuemax="100000"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  className="chakra-numberinput__field css-1551roq"
                                  value={nutritionForm.calories}
                                  onChange={(e) =>
                                    setNutritionForm((u) => ({
                                      ...u,
                                      calories: e.target.value,
                                    }))}
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div
                            role="group"
                            className="chakra-form-control css-1kxonj9"
                          >
                            <div
                              className="chakra-input__group css-bx0blc"
                              data-group="true"
                            >
                              <input
                                name="imageUrl"
                                type="text"
                                placeholder="url for image"
                                id="field-:rv:"
                                className="chakra-input css-p20xy6"
                                value={nutritionForm.imageUrl}
                                onChange={(e) =>
                                  setNutritionForm((u) => ({
                                    ...u,
                                    imageUrl: e.target.value,
                                  }))
                                }
                              ></input>
                            </div>
                          </div>
                          <div className="error">
                            {nutritionForm.name == "" ||
                            nutritionForm.category == "" ||
                            nutritionForm.quantity == 0 ||
                            nutritionForm.calories == 0 ||
                            nutritionForm.imageUrl == ""
                              ? "Please fill out all fields."
                              : null}
                          </div>
                          <button
                            type="submit"
                            className="submit-nutrition"
                            onClick={submitNutritionForm}
                          >
                            <Link
                              className="save-nutrition-link"
                              to={"/nutrition"}
                            >
                              Save
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}