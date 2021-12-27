import React from "react";
import "./WeatherData.css";
import Forecast from "./Forecast";
import Temperature from "./Temperature";
import HourlyForecast from "./HourlyForecast";

export default function WeatherData(props) {
  return (
    <div className="WeatherData row border-bottom border-top border-primary border-2 pt-2 pb-2">
      <div className="col row">
        <Forecast pressure="995" humidity="70" wind="5.14" city="Lima" />
        <Temperature
          degrees="22"
          currentTime="Sunday 18:41"
          description="Broken clouds"
          image="/img/cloud.png"
        />
        <div className="weather-hourly-forecast" id="hourly-forecast">
          <div className="row">
            <HourlyForecast hour="6 p.m." maxTemp="22" image="/img/cloud.png" />
            <HourlyForecast hour="7 p.m." maxTemp="21" image="/img/sun.png" />
            <HourlyForecast hour="8 p.m." maxTemp="20" image="/img/cloud.png" />
            <HourlyForecast hour="9 p.m." maxTemp="19" image="/img/sun.png" />
            <HourlyForecast
              hour="10 p.m."
              maxTemp="18"
              image="/img/cloud-sun.png"
            />
            <HourlyForecast
              hour="11 p.m."
              maxTemp="17"
              image="/img/cloud.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
