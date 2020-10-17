import React from "react";
import "./wea-des.css"

export default function Descripts(props) {

    return (
            <div>
            <div className="weatherDes">
                <p>
                    {props.data.description}
                </p>
            </div>

            <div className="descriptives">
                <p className="descriptive">
                    Humidity = {props.data.humidity}%</p>
                <p className="descriptive">
                    Wind Speed = {props.data.wind}m/s</p>
            </div>
</div>
    );
}
