import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero"


export default function Home() {
  return (
    <div className="css-16ecvb5">
      <Hero></Hero>
    </div>
  )}

      {/* <div className="tiles css-gg4vpm">
        <div spacing="10px" className="css-dvxtzn">
          <div className="css-70qvj9">
            <p className="chakra-text css-1jijfcn">Fitness</p>
            <div className="css-17xejub"></div>
            &nbsp;
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <img className = "fitness-img" path="https://www.transparentpng.com/download/fitness/dMxtPl-fitness-clipart-photo.png" ></img>
            </svg>
          </div>
          <div className="css-17xejub"></div>
          <div
            className="Tile"
            style='background-image: url("/assets/athlete-adf95577.jpg"); background-size: cover; background-repeat: no-repeat;'
          ></div>
        </div>
        <div spacing="10px" className="css-dvxtzn">
          <div className="css-70qvj9">
            <p className="chakra-text css-1jijfcn">Food</p>
            <div className="css-17xejub"></div>
            &nbsp;
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 112l16-64 47-16"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M224 112h256"
              ></path>
            </svg>
          </div>
          <div className="css-17xejub"></div>
          <div
            className="Tile"
            style='background-image: url("/assets/food-e5a7cc9e.jpg"); background-size: cover; background-repeat: no-repeat;'
          ></div>
        </div>
        <div spacing="10px" className="css-dvxtzn">
          <div className="css-70qvj9">
            <p className="chakra-text css-1jijfcn">Rest</p>
            <div className="css-17xejub"></div>
            &nbsp;
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.8 26.57L238 60.37l7.8 13.17L281 52.59 270.8 118l6.3 10.6L336 93.53l-7.8-13.17-37.3 22.14L301 37.12l-6.2-10.55zM147.1 60.55A224 224 0 0 0 32 256a224 224 0 0 0 224 224 224 224 0 0 0 214.9-161.2A208 208 0 0 1 320 384a208 208 0 0 1-208-208 208 208 0 0 1 35.1-115.45zm244.5 52.05l-6.9 16.5 44.1 18.4-68.3 35.9-5.5 13.2 73.7 30.8 6.9-16.5-46.7-19.5 68.3-35.9 5.5-13.2-71.1-29.7zm-115 64l-97.8 35 8.1 22.7 60.6-21.7-35.4 97.9 6.5 18.1L320 292.4l-8.1-22.7-64.2 23 35.4-97.9-6.5-18.2z"></path>
            </svg>
          </div>
          <div className="css-17xejub"></div>
          <div
            className="Tile"
            style='background-image: url("/assets/alarm-cff3823f.jpg"); background-size: cover; background-repeat: no-repeat;'
          ></div>
        </div>
        <div spacing="10px" className="css-dvxtzn">
          <div className="css-70qvj9">
            <p className="chakra-text css-1jijfcn">Planner</p>
            <div className="css-17xejub"></div>
            &nbsp;
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <img className="planner-img" path="https://www.transparentpng.com/download/time/old-dark-alarm-calendar-clock-event-schedule-time-watch-icons-png-35.png"></img>
            </svg>
          </div>
          <div className="css-17xejub"></div>
          <div
            className="Tile"
            style='background-image: url("/assets/calendar-debf6f3b.jpg"); background-size: cover; background-repeat: no-repeat;'
          ></div>
        </div>
    </div> */}