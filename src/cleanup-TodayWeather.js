import React from "react";
import "./todaytemp.css";
import TodayDate from "./TodayDate";
import WeatherDescription from "./Descripts";
import TodayTemperature from "./TodayTemperature";

export default function TodayTemp(props) {

    return (
<div className="today-temp">
        <p className="today" >
            <TodayDate date={props.data.date}/>
        </p>
    <div className="mainTemp">
        <div className="row" >
            <div className="col-2"></div>
            <div className="col-3">
                <TodayTemperature celsius={props.data.temperature} />
            </div>
            <div className="col-2">
                <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-4"></div>
            <div className="col-1"></div>
        </div>
    </div>
    <WeatherDescription/>

</div>








    );
}
