import React from "react";
import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  return (
    <div className="HourlyForecast col-2">
      <div className="weather-forecast-date">{props.hour}</div>
      <img src={props.image} alt="" width="50" />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {props.maxTemp}°
        </span>
      </div>
    </div>
  );
}
