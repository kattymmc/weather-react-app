import React from "react";
import "./DailyForecast.css";
import DailyForecast from "./DailyForecast";

export default function WeatherDailyData(props) {
  return (
    <div className="WeatherDailyData row mt-3 daily-forecast">
      <h2>Daily Forecast</h2>
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <DailyForecast
            day="Sun"
            maxTemp="22"
            minTemp="18"
            image="/img/cloud.png"
          />
          <DailyForecast
            day="Mon"
            maxTemp="21"
            minTemp="19"
            image="/img/sun.png"
          />
          <DailyForecast
            day="Tue"
            maxTemp="23"
            minTemp="20"
            image="/img/cloud-sun.png"
          />
          <DailyForecast
            day="Wen"
            maxTemp="22"
            minTemp="18"
            image="/img/sun.png"
          />
          <DailyForecast
            day="Thu"
            maxTemp="21"
            minTemp="19"
            image="/img/cloud-sun.png"
          />
          <DailyForecast
            day="Fri"
            maxTemp="25"
            minTemp="17"
            image="/img/cloud.png"
          />
        </div>
      </div>
    </div>
  );
}
