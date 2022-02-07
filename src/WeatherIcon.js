import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "sun", "01n": "moon",
        "02d": "cloud-sun", "02n": "cloud-sun",
        "03d": "cloud", "03n": "cloud",
        "04d": "cloud", "04n": "cloud",
        "09d": "rain", "09n": "rain",
        "10d": "rain", "10n": "rain",
        "11d": "lightning", "11n": "lightning",
        "13d": "snow", "13n": "snow",
        "50d": "mist", "50n": "mist"
      }
    let source = `/img/${codeMapping[props.code]}.png`
  return (
    <img className="main-image" id="icon" alt={props.description} src={source} width={props.imageWidth}/>
  );
}
