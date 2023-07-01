import * as React from "react";
import "./SleepNew.css";
import { Link } from "react-router-dom";

export default function SleepNew(){
    return(
<div className="SleepNew">
        <div className="css-vpbd2d">
                <div className="css-0">
                    <div className="css-pwgvc2">
                        <div className="chakra-stack css-1jtnem3">
                            <div className="css-1hv8zgx">
                                <div className="css-mlsaez">
                                    <div className="chakra-stack css-13ra036">
                                    <h2 className="chakra-heading css-15a3bhq">Record Sleep</h2>
                                    <div className="css-ebzegt">
                                        <form>
                                            <div className="chakra-stack css-1db3zf7">
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label id="field-:r3:-label" htmlFor="field-:r3:" className="chakra-form__label css-g6pte">Start Time
                                                        <span role="presentation" aria-hidden="true" className="chakra-form__required-indicator css-1tfjd1n">*</span>
                                                    </label>
                                                    <div className="chakra-input__group css-bx0blc" data-group="true">
                                                        <input name="startTime" type="datetime-local" placeholder="Start Time" id="field-:r2:" required="" aria-required="true" className="chakra-input css-p20xy6" value=""></input>
                                                    </div>
                                                </div>
                                                <div role="group" className="chakra-form-control css-1kxonj9">
                                                    <label id="field-:r3:-label" htmlFor="field-:r3:" className="chakra-form__label css-g6pte">End Time
                                                        <span role="presentation" aria-hidden="true" className="chakra-form__required-indicator css-1tfjd1n">*</span>
                                                    </label>
                                                    <div className="chakra-input__group css-bx0blc" data-group="true">
                                                        <input name="endTime" type="datetime-local" placeholder="End Time" id="field-:r3:" required="" aria-required="true" className="chakra-input css-p20xy6" value=""></input>
                                                    </div>
                                                </div>
                                                <button type="submit" className="chakra-button css-1nrq84c">Save</button>
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
    )
}