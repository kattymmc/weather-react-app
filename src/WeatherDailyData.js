import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DailyForecast from "./DailyForecast";

export default function WeatherDailyData(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load(){
    let apiKey = "3cc14af1cc614dc49a125b2e4cd9bfdf";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if(loaded){
    return (
      <div className="WeatherDailyData row mt-3 daily-forecast">
        <h2>Daily Forecast</h2>
        <div className="weather-forecast" id="forecast">
          <div className="row">
            {forecast.map(function(dailyForecast, index){
              if(index < 6){
                return(
                  <DailyForecast key={index}
                    day={dailyForecast.dt}
                    maxTemp={dailyForecast.temp.max}
                    minTemp={dailyForecast.temp.min}
                    description={dailyForecast.weather[0].description}
                    image={dailyForecast.weather[0].icon}
                  />
                ); 
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
