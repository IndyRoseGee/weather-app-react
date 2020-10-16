import React, {useState} from "react";
import "./citysearch.css";
import axios from "axios";

export default function CitySearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
 
 function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

   function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
 
 function search() {
  const apiKey = "5e479c0f3c564141872dc35a4d10e84c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);}

  return (
    <div className="city-search">
      <div className="navbar-css">
        <nav className="navbar navbar-light bg-light">
          <h1 id="navbarCity">London, UK</h1>
          <form className="form-inline" id="search-form">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="Search City"
              id="city-search"
              onChange={handleCityChange}
            />
            <button
              id="button"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
            <button
              id="current-location"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Current Location
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}
