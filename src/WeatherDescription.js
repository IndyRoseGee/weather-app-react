import React from "react";
import "./wea-des.css"

export default function TodayWeaDes() {

    return (
            <div>
            <div className="weatherDes">
                <p>
                    <span id="desWea">It is Sunny</span>
                </p>
            </div>

            <div className="descriptives">
                <p className="descriptive">
                    Humidity = <span id="humidity">-</span>%</p>
                <p className="descriptive">
                    Wind Speed = <span id="wind">-</span> m/s</p>
            </div>
</div>
    );
}
