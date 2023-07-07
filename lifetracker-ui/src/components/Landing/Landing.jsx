import * as React from "react";
import "./Landing.css";
import Hero from "../Hero/Hero"
import { useEffect, useState } from 'react'
import axios from 'axios'



export default function Landing() {

  return (
    <div className="landing-page">
      <Hero></Hero>
    </div>
  )
}