import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";
import "./Temperature.css";

export default function Temperature(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.currentTime.getDay()];
  let hours = props.currentTime.getHours();
  if(hours < 10){
    hours = `0${hours}`;
  }
  let minutes = props.currentTime.getMinutes();
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  return (
    <div className="Temperature col">
      <WeatherIcon code={props.image} alt={props.description}/>
      <WeatherConversion celsius={props.degrees}/>

      <ul className="forecast">
        <li>
          <strong>Last updated: </strong>
          <span id="current-time">{day} {hours}:{minutes}</span>
        </li>
        <li id="description">{props.description}</li>
      </ul>
    </div>
  );
}
