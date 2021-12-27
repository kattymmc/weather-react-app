import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature col">
      <img className="main-image" id="icon" alt="main icon" src={props.image} />
      <span id="degrees">{props.degrees}</span>
      <a href="/" id="celcius" className="active">
        °C
      </a>
      |
      <a href="/" id="farenheit">
        °F
      </a>
      <ul className="forecast">
        <li>
          <strong>Last updated: </strong>
          <span id="current-time">{props.currentTime}</span>
        </li>
        <li id="description">{props.description}</li>
      </ul>
    </div>
  );
}
