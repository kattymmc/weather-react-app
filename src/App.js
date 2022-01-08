import "./index.css";
import "./App.css";
import WeatherData from "./WeatherData";
import WeatherDailyData from "./WeatherDailyData";

function App() {
  return (
    <div className="App">
      <div className="container border border-primary border-3 rounded-1 mt-3 mb-3">
        <WeatherData defaultCity="Lima"/>
        <WeatherDailyData />
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/kattymmc/weather-react-app"
            alt="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Katherine Miraval from{" "}
          <a href="https://www.shecodes.io/" alt="SheCodes" target="_blank" rel="noreferrer">
            She Codes
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
