
import React from "react";
import Date from "./Date";



export default function Date(props) {

    function formatDate() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let hours = currentDate.getHours(0, 0, 0, 0);
  let minutes = currentDate.getMinutes();
  let year = currentDate.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];

  return currentTimeDate;
}
console.log(formatDate(new Date()));


return (
            <div>
                Today ${hours}:${minutes} | ${day} ${date} ${month} ${year}
      </div>
      );
}