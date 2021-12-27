import logo from './logo.svg';
import "./index.css";
import './App.css';
import Search from "./Search";
import WeatherData from "./WeatherData";
import WeatherDailyData from "./WeatherDailyData";

function App() {
  return (
    <div className="App">
      <div className="container border border-primary border-3 rounded-1 mt-3 mb-3">
        <Search />
        <br />
        <WeatherData />
        <WeatherDailyData />
      </div>
    </div>
  );
}

export default App;
