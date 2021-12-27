import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast col">
      <h2>
        <span id="city">{props.city}</span>
      </h2>
      <ul className="forecast">
        <li>
          <strong>Pressure: </strong>
          {props.pressure} hPa
        </li>
        <li>
          <strong>Humidity: </strong>
          {props.humidity}%
        </li>
        <li>
          <strong>Wind: </strong>
          {props.wind} m/s
        </li>
      </ul>
    </div>
  );
}
