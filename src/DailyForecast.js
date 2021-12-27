import React from "react";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast col-2">
      <div className="weather-forecast-date">{props.day}</div>
      <img src={props.image} alt="" width="50" />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {props.maxTemp}°
        </span>
        <span className="weather-forecast-temperature-min">
          {props.minTemp}°
        </span>
      </div>
    </div>
  );
}
