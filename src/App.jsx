import React, { useEffect, useState } from "react";
import sunimg from "./assets/sun.png";
import humidityimg from "./assets/humidity.png";
import windimg from "./assets/wind.png";
import cloudy from "./assets/cloudy.png";
import rainy from "./assets/rainy.png";
import snow from "./assets/snowflake.png";
import breezy from "./assets/breezy.png";
import mist from "./assets/mist.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [weather, setWeather] = useState("");
  const [userData, setUserData] = useState("");

  const allIcons = {
    "01d": sunimg,
    "01n": sunimg,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": breezy,
    "04n": breezy,
    "09d": rainy,
    "09n": rainy,
    "10d": rainy,
    " 10n": rainy,
    "13d": snow,
    "13n ": snow,
    "50d": mist,
    "50n": mist,
  };

  const search = async (city) => {
    if (city === "") {
      toast.error("Enter Location", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    try {
      const apiKey = "2dab65a4f1924a667aaad772e19451d9";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const respone = await fetch(url);
      const data = await respone.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon];
      setWeather({
        speed: data.wind.speed,
        temp: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        location: data.name,
        icon: icon,
        name: data.name,
      });
    } catch (error) {
      setWeather(false);
      toast.error("Error getting data or invalid data", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handlesearch = () => {
    search(userData);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-950 to-slate-800 h-dvh flex items-center justify-center  ">
        <ToastContainer />
        <div className="bg-gradient-to-r from-violet-600 to-violet-950 w-full sm:w-96 md:w-72 h-auto md:h-[60vh] mt-10 sm:mt-20 lg:mt-2 rounded-lg shadow-2xl shadow-stone-800 p-4 ">
          <div className="flex justify-center mt-6">
            <input
              type="text"
              placeholder="Search"
              value={userData}
              onChange={(e) => setUserData(e.target.value)}
              className="m-2 border-none outline-none rounded-full py-2 px-4 w-full sm:w-auto"
            />

            <button onClick={handlesearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="bg-white rounded-full p-1 w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

          {weather ? (
            <>
              <div className="flex flex-col items-center mt-6 text-white">
                <img src={weather.icon} alt="" className="w-20 " />
                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
                  {weather.temp}°C
                </h1>
                <p className="mt-2 text-xl sm:text-2xl lg:text-3xl">
                  {weather.name}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between text-white mt-6">
                <div className="p-4 flex flex-col items-center">
                  <img
                    src={humidityimg}
                    alt=""
                    className="w-12 bg-white rounded-full p-2"
                  />
                  <h1 className="pt-2 text-lg sm:text-xl">
                    {weather.humidity}%
                  </h1>
                  <span>Humidity</span>
                </div>

                <div className="p-4 flex flex-col items-center">
                  <img
                    src={windimg}
                    alt=""
                    className="w-12 bg-white rounded-full p-2"
                  />
                  <h1 className="pt-2 text-lg sm:text-xl">
                    {" "}
                    {weather.speed} Km/h
                  </h1>
                  <span>Wind</span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
