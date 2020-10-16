import React from "react";
import "./todaytemp.css";
import bigEmoji from "./media/01d.png";
import TodayDate from "./TodayDate";
import WeatherDescription from "./WeatherDescription";

export default function TodayTemp(props) {

    return (
        <div className="today-temp">
            <p className="today" id="todays-date">
        <TodayDate date={props.data.date}/>
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
                <WeatherDescription/>
        </div>
    );
}
