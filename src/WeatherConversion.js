import React, { useState } from "react";
import "./WeatherConversion.css";

export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius"){
        return (
            <span className="WeatherConversion">
                <span className="degrees">{Math.round(props.celsius)}</span>
                °C 
            </span>
        );
    } else {
        return (
            <span className="WeatherConversion">
                <span className="degrees">{Math.round(fahrenheit())}</span>
                <a href="/" onClick={showCelsius}>
                °C
                </a>
                | °F
            </span>
        );
    }
  
}