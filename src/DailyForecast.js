import React from "react";
import "./DailyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.maxTemp);
    return `${temperature}°`
  }

  function minTemperature() {
    let temperature = Math.round(props.minTemp);
    return `${temperature}°`
  }

  function day(){
    let date = new Date(props.day * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="DailyForecast col-2">
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.image} alt={props.description} imageWidth={50} />
      <img src={props.image} alt="" width="50" />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
