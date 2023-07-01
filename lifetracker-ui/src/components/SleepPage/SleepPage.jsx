import * as React from "react";
import "./SleepPage.css";
import { Link } from "react-router-dom";


export default function SleepPage(){

   return( 
        <div className="SleepPage css-1bpnzr3">
            <div className="css-k2eq80">
                <div className="chakra-stack css-1cgbrw5">
                    <h2 className="chakra-heading css-b5coes">Sleep</h2>
                </div>
            </div>

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









            <div className="css-vpbd2d">
                <div className="css-1qfrez2">
                    <div className="css-uiodal">
                        <div className="sleep-feed">
                            <div className="css-0">
                                <div className="css-j7qwjs">
                                    <h2 className="chakra-heading css-hzsul0">Nothing here yet.</h2>
                                        <button type="button" className="chakra-button css-ez23ye">  
                                            <Link to={"/sleep/create"} className="record-sleep-button" > Record Sleep </Link>
                                        </button>
                                    <img src="https://lifetracker-ui-ai8e.onrender.com/assets/empty-bed-b93e7358.jpg" className="chakra-image css-ni3ua3"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        <div className="css-1qfrez2">
            <div className="css-uiodal">
                <div className="sleep-feed">
                    <button type="button" className="chakra-button css-ez23ye">  
                        <Link to={"/sleep/create"} className="record-sleep-button" > Add Sleep </Link>
                    </button>
                    <div className="chakra-stack css-xixnl8">
                        <div className="css-sxxv4f">
                            <div className="css-56yjmq">
                                <span className="chakra-avatar css-en15ln">
                                    <div role="img" aria-label="13hr" className="chakra-avatar__initials css-1ebyn6">1</div>
                                </span>
                                <div className="css-1kw2fa0">
                                    <h2 className="chakra-heading css-y5314g">Jul 2nd, 2023</h2>
                                </div>
                            </div>
                            <div className="white css-1lekzkb">
                                <div className="chakra-stat css-1mbo1ls">
                                    <dl>
                                        <dt className="chakra-stat__label css-14go5ty">Start Time</dt>
                                        <dd className="chakra-stat__number css-1axeus7">9:16 PM</dd>
                                    </dl>
                                </div>
                                <div className="chakra-stat css-1mbo1ls">
                                    <dl>
                                        <dt className="chakra-stat__label css-14go5ty">End Time</dt>
                                        <dd className="chakra-stat__number css-1axeus7">10:16 AM</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chakra-stack css-xixnl8">
                        <div className="css-sxxv4f">
                            <div className="css-56yjmq">
                                <span className="chakra-avatar css-en15ln">
                                    <div role="img" aria-label="147.98333333333332hr" className="chakra-avatar__initials css-1ebyn6">1</div>
                                </span>
                                <div className="css-1kw2fa0">
                                    <h2 className="chakra-heading css-y5314g">Jul 12th, 2023</h2>
                                </div>
                            </div>
                            <div className="white css-1lekzkb">
                                <div className="chakra-stat css-1mbo1ls">
                                    <dl>
                                        <dt className="chakra-stat__label css-14go5ty">Start Time</dt>
                                        <dd className="chakra-stat__number css-1axeus7">7:17 PM</dd>
                                    </dl>
                                </div>
                                <div className="chakra-stat css-1mbo1ls">
                                    <dl>
                                        <dt className="chakra-stat__label css-14go5ty">End Time</dt>
                                        <dd className="chakra-stat__number css-1axeus7">11:16 PM</dd>
                                    </dl>
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