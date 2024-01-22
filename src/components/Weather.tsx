import React, { useState, useEffect } from "react";
import SearchCity from "./SearchCity";
import WeatherDisplay from "./CityWeather";
import useWeatherApi from "../hooks/requests";

export default function Weather() {
  const [city, setCity] = useState("Lviv");
  const [weatherDescription, setWeatherDescription] = useState("");
  const { weatherData, loading, error } = useWeatherApi(city);

  useEffect(() => {
    if (weatherData) {
      setWeatherDescription(weatherData.weather[0].description);
    }
  }, [weatherData]);

  const getVideoSource = () => {
    switch (weatherDescription.toLowerCase()) {
      case "scattered clouds":
        return "https://cdn.pixabay.com/vimeo/166339063/sky-3186.mp4?width=640&hash=8eeaf50375574be9d47d38e94c0e878371714741";
      case "broken clouds":
        return "https://cdn.pixabay.com/vimeo/143492926/clouds-1154.mp4?width=480&hash=d2f753d2b6c07818fc6eb94764b671e65636e48f"
      case "sunny":
        return "https://cdn.pixabay.com/vimeo/447070773/cloud-45901.mp4?width=640&hash=18a0cb24f97d00a9183a7afb8097b1b7ca5da11b";
      case "light snow":
        return "https://cdn.pixabay.com/vimeo/890121806/trees-191443.mp4?width=1280&hash=981f53e4d65a42903693d44aecb9164ac9fb1c4b";
      case "clear sky":
        return "https://cdn.pixabay.com/vimeo/412926058/sky-36816.mp4?width=640&hash=4613a93831ee0cc645679805178e2918646c2580";
      case "rain":
        return "https://cdn.pixabay.com/vimeo/637690571/rain-92413.mp4?width=1280&hash=8d718b75aa85eca4e732f5dd6aef90a8c6aed02e";
      case "overcast clouds":
        return "https://cdn.pixabay.com/vimeo/417752184/time-lapse-38125.mp4?width=640&hash=30fe55925c745d94e9573e06218f2a7cb2939b21";
      case "snow":
        return "https://cdn.pixabay.com/vimeo/390497845/storm-32082.mp4?width=640&hash=43acd1b4853998c4109e7b788592920c6d15c948";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full h-screen absolute inset-0">
            <video
              className="w-full h-screen object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={getVideoSource()}
            />
          </div>
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 p-8 rounded-lg w-1/2 h-2/5">
          <SearchCity setCity={setCity} />
          <WeatherDisplay city={city} />
        </div>
      </div>
    </>
  );
}
