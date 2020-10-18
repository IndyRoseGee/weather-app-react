import React from "react";
import "./contents.css";

import Weather from "./Weather";
import Footer from "./Footer";

import WeatherVideos from "./media/01d.mp4";

export default function App(props) {
  return (
    <div className="app">
      <div className="section">
        <div className="vids">
          <div id="video">
        <video autoPlay loop muted id="vids">
            <source src={WeatherVideos} type="video/mp4" />
        </video>
          </div>
        </div>
        <div className="container" max-width="600px">
          <div className="main-content">
            <Weather defaultCity="London"/>
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}