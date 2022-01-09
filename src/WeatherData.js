import React, { useState } from "react";
import "./WeatherData.css";
import Forecast from "./Forecast";
import Temperature from "./Temperature";
import HourlyForecast from "./HourlyForecast";
import axios from "axios";

export default function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      ready: true
    });
  }

  function search(){
    let apiKey = "3cc14af1cc614dc49a125b2e4cd9bfdf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if(weatherData.ready){
    return (
      <div className="WeatherData">
        <div className="search">
          <form className="form-inline" id="search-form" onSubmit={handleSubmit}>
            <label for="search">Enter a city </label>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              id="search"
              autocomplete="off"
              onChange={handleCityChange}
            />
            <input className="btn btn-success" type="submit" value="Search" />
          </form>
        </div>
        <br />
        <div className="row border-top border-primary border-2 pt-2 pb-2">
          <div className="col row">
            <Forecast pressure="995" humidity={weatherData.humidity} wind={weatherData.wind} city={weatherData.city} />
            <Temperature
              degrees={weatherData.temperature}
              currentTime={weatherData.date}
              description={weatherData.description}
              image={weatherData.icon}
            />
            <div className="weather-hourly-forecast" id="hourly-forecast">
              <div className="row">
                <HourlyForecast hour="6 p.m." maxTemp="22" image="/img/cloud.png" />
                <HourlyForecast hour="7 p.m." maxTemp="21" image="/img/sun.png" />
                <HourlyForecast hour="8 p.m." maxTemp="20" image="/img/cloud.png" />
                <HourlyForecast hour="9 p.m." maxTemp="19" image="/img/sun.png" />
                <HourlyForecast
                  hour="10 p.m."
                  maxTemp="18"
                  image="/img/cloud-sun.png"
                />
                <HourlyForecast
                  hour="11 p.m."
                  maxTemp="17"
                  image="/img/cloud.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
  
}
