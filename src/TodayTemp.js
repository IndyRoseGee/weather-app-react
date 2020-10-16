import React from "react";
import "./todaytemp.css";
import bigEmoji from "./media/01d.png";

export default function TodayTemp() {

    return (
        <div className="today-temp">
            <p className="today" id="todays-date">
                Today Time | Day Date Month 2020
      </p>
            <div className="mainTemp">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3">
                        <span className="maintemp" id="main-temperature">
                            -{" "}
                        </span>
                        <span className="maindegrees">
                            <a href="#/" className="active" id="celsius-link">
                                ºC
              </a>{" "}
              |
              <a href="#/" id="fahrenheit-link">
                                ºF{" "}
                            </a>
                        </span>
                    </div>
                    <div className="col-2" id="icon">
                        <img src={bigEmoji} alt="Sun" />
                    </div>
                    <div className="col-4" id="two-temps">
                        <p>
                            High: <span id="high-temp">-</span>{" "}
                            <span id="celsius-symbol">ºC</span>
                            <br />
              Low: <span id="low-temp">-</span>{" "}
                            <span id="celsius-symbol-low">ºC</span>
                        </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div className="weatherDes">
                <p>
                    <span id="desWea">It is Sunny</span>
                </p>
            </div>

            <div className="descriptives">
                <p className="descriptive">
                    Humidity = <span id="humidity">-</span>%
        </p>
                <p className="descriptive">
                    Wind Speed = <span id="wind">-</span> m/s
        </p>
            </div>
        </div>
    );
}
