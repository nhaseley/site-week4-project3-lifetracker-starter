import * as React from "react";
import "./ExercisePage.css";
import { Link } from "react-router-dom";


export default function ExercisePage(){

    return( 
    
        <div className="ExercisePage css-1bpnzr3">
            <div className="css-19cns6y">
                <div className="chakra-stack css-1cgbrw5">
                    <h2 className="chakra-heading css-b5coes">Exercise</h2>
                </div>
            </div>

            <div className="css-vpbd2d">
                <div className="css-1qfrez2">
                    <div className="css-uiodal">
                        <div className="exercise-feed">
                            <div className="css-0">
                                <div className="css-j7qwjs">
                                    <h2 className="chakra-heading css-hzsul0">Nothing here yet.</h2>
                                        <button type="button" className="chakra-button css-ez23ye">  
                                            <Link to={"/exercise/create"} className="record-exercise-button" > Record Exercise </Link>
                                        </button>
                                    <img src="https://lifetracker-ui-ai8e.onrender.com/assets/bikepath-ebe31266.jpg" className="chakra-image css-ni3ua3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="css-vpbd2d">
                <div className="css-0">
                    <div className="css-pwgvc2">
                    <div className="chakra-stack css-1jtnem3">
                        <div className="css-1hv8zgx">
                        <div></div>
                        <div className="css-mlsaez">
                            <div className="chakra-stack css-13ra036">
                            <h2 className="chakra-heading css-15a3bhq">Record Exercise</h2>
                            <div className="css-ebzegt">
                                <form>
                                <div className="chakra-stack css-1db3zf7">
                                    <div role="group" className="chakra-form-control css-1kxonj9">
                                        <div className="chakra-input__group css-bx0blc" data-group="true">
                                            <input name="name" type="text" placeholder="Name" id="field-:rr:" required="" aria-required="true" className="chakra-input css-p20xy6" value=""></input>
                                        </div>
                                    </div>
                                    <div role="group" className="chakra-form-control css-1kxonj9">
                                        <label id="field-:rs:-label" className="chakra-form__label css-g6pte">Category
                                            <span role="presentation" aria-hidden="true" className="chakra-form__required-indicator css-1tfjd1n">*</span>
                                        </label>
                                        <div className="chakra-select__wrapper css-42b2qy">
                                            <select name="category" id="field-:rs:" required="" aria-required="true" className="chakra-select css-1gpsbw3">
                                                <option value="">Select a category</option>
                                                <option value="snack">Snack</option>
                                                <option value="beverage">Beverage</option>
                                                <option value="food">Food</option>
                                            </select>
                                            <div className="chakra-select__icon-wrapper css-iohxn1">
                                                <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style={{width: "1em", height: "1em", color: "currentcolor"}}><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-9jay18">
                                        <div role="group" className="chakra-form-control css-1kxonj9">
                                            <label id="field-:rt:-label" className="chakra-form__label css-g6pte">Duration (min)
                                            <span role="presentation" aria-hidden="true" className="chakra-form__required-indicator css-1tfjd1n">*</span>
                                            </label>
                                            <div value="1" className="chakra-numberinput css-3e5t3k">
                                            <input name="quantity" inputMode="decimal" type="text" pattern="[0-9]*(.[0-9]+)?" id="field-:rt:" aria-readonly="false" aria-required="true" required="" role="spinbutton" aria-valuemin="1" aria-valuemax="100" aria-valuenow="1" aria-valuetext="1" autoComplete="off" autoCorrect="off" className="chakra-numberinput__field css-1551roq" value="1"></input>
                                            <div aria-hidden="true" className="css-1jj9yua">
                                                <div role="button" tabIndex="-1" className="css-1m5jnul">
                                                <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi"><path fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                                                </div>
                                                <div role="button" tabIndex="-1" disabled="" aria-disabled="true" className="css-1m5jnul">
                                                <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi"><path fill="currentColor" d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"></path></svg>
                                                </div>
                                            </div>
                                            </div>
                                        </div>&nbsp;
                                        <div role="group" className="chakra-form-control css-1kxonj9">
                                            <label id="field-:ru:-label" className="chakra-form__label css-g6pte">Intensity
                                                <span role="presentation" aria-hidden="true" className="chakra-form__required-indicator css-1tfjd1n">*</span>
                                            </label>
                                            <div value="" className="chakra-numberinput css-3e5t3k">
                                                <input name="calories" inputMode="decimal" type="text" pattern="[0-9]*(.[0-9]+)?" id="field-:ru:" aria-readonly="false" aria-required="true" required="" role="spinbutton" aria-valuemin="0" aria-valuemax="100000" autoComplete="off" autoCorrect="off" className="chakra-numberinput__field css-1551roq" value="1"></input>
                                                <div aria-hidden="true" className="css-1jj9yua">
                                                    <div role="button" tabIndex="-1" className="css-1m5jnul">
                                                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi"><path fill="currentColor" d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"></path></svg>
                                                    </div>
                                                    <div role="button" tabIndex="-1" className="css-1m5jnul">
                                                        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi"><path fill="currentColor" d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="chakra-button css-1nrq84c">Save</button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>




            <div className="css-vpbd2d">
                <div className="css-1qfrez2">
                    <div className="css-uiodal">
                        <div className="exercise-feed">
                            <div className="chakra-link button css-spn4bz">
                                <button type="button" className="chakra-button css-ez23ye">
                                    <Link to={"/exercise/create"} className="record-exercise-button"> Add Exercise </Link></button>
                            </div>
                            <div className="chakra-stack css-xixnl8">
                                <span className="css-89mcmc">Today at 3:11 PM</span>
                                <div className="css-1d1dt3r">
                                    <div className="css-56yjmq">
                                        <span className="chakra-avatar css-c6eg9t">
                                            <div role="img" aria-label="dx" className="chakra-avatar__initials css-1ebyn6">d</div>
                                        </span>
                                        <div className="css-1kw2fa0">
                                            <h2 className="chakra-heading css-y5314g">dx
                                                <span className="chakra-badge css-lvvibp"></span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="white css-1lekzkb">
                                        <div className="chakra-stat css-1mbo1ls">
                                            <dl>
                                                <dt className="chakra-stat__label css-14go5ty">Duration</dt>
                                                <dd className="chakra-stat__number css-1axeus7">3</dd>
                                            </dl>
                                        </div>
                                        <div className="chakra-stat css-1mbo1ls">
                                            <dl>
                                                <dt className="chakra-stat__label css-14go5ty">Intensity</dt>
                                                <dd className="chakra-stat__number css-1axeus7">1/10</dd>
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
                                            <div role="img" aria-label="nya" className="chakra-avatar__initials css-1ebyn6">n</div>
                                        </span>
                                        <div className="css-1kw2fa0">
                                            <h2 className="chakra-heading css-y5314g">nya
                                                <span className="chakra-badge css-lvvibp"></span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="white css-1lekzkb">
                                        <div className="chakra-stat css-1mbo1ls">
                                            <dl>
                                                <dt className="chakra-stat__label css-14go5ty">Duration</dt>
                                                <dd className="chakra-stat__number css-1axeus7">60</dd>
                                            </dl>
                                        </div>
                                        <div className="chakra-stat css-1mbo1ls">
                                            <dl>
                                                <dt className="chakra-stat__label css-14go5ty">Intensity</dt>
                                                <dd className="chakra-stat__number css-1axeus7">1/10</dd>
                                            </dl>
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