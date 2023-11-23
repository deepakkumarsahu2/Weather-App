import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import cloudy from "../assets/cloudy.png";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { getWeatherData } from "./WeatherData";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("mumbai");
  useEffect(() => {
    const fetchingData = async () => {
      const data = await getWeatherData(city);
      // console.log(data);
      setWeather(data);
    };
    fetchingData();
  }, [city]);

  const enterPress = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <>
      <div className="container">
        {weather && (

          
          <>
         
            <div className="child-container">
              {/* FIRST SECTION */}
             
              <div className="input-field">
                <input
                  type="text"
                  name="text"
                  id="textSearch"
                  onKeyDown={enterPress}
                  placeholder="Search...... & Press Enter"
                />
               
              </div>

              {/* SECOND SECTION  */}
              <div className="temp-section">
                <div className="first-temp">
                  <img src={weather.iconUrl} alt="" className="temp-icon" />
                  <h2>
                    {weather.name},{weather.country}{" "}
                  </h2>
                  <small>{weather.description} </small>
                  <h1>{weather.temp.toFixed()} °C</h1>
                </div>

                <div className="second-temp">
                  <div className="box">
                    <div className="card">
                      <FaArrowDown />
                      <small>Temp.Min</small>
                    </div>
                    <h2>{weather.temp_min.toFixed()} °C</h2>
                  </div>
                  <div className="box">
                    <div className="card">
                      <FaArrowUp />
                      <small>Temp.Max</small>
                    </div>
                    <h2>{weather.temp_max.toFixed()} °C</h2>
                  </div>
                  <div className="box">
                    <div className="card">
                      <WiHumidity />
                      <small>Humidity</small>
                    </div>
                    <h2>{weather.humidity} %</h2>
                  </div>
                  <div className="box">
                    <div className="card">
                      <FaWind />
                      <small>Wind Speed</small>
                    </div>
                    <h2>{weather.speed.toFixed()} Km/h</h2>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <footer>
        <h3>&copy; Copyright Reserves to Deepak Kumar</h3>
      </footer>
    </>
  );
}
