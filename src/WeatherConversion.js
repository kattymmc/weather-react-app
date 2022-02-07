import React from "react";
import "./WeatherConversion.css";

export default function WeatherConversion(props) {

    return (
        <span className="WeatherConversion">
            <span className="degrees">{Math.round(props.celsius)}</span>
            °C 
        </span>
    );

  
}