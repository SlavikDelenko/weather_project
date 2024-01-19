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
      case "sunny":
        return "https://cdn.pixabay.com/vimeo/447070773/cloud-45901.mp4?width=640&hash=18a0cb24f97d00a9183a7afb8097b1b7ca5da11b";
      case "light snow":
        return "https://cdn.pixabay.com/vimeo/890121806/trees-191443.mp4?width=1280&hash=981f53e4d65a42903693d44aecb9164ac9fb1c4b";
      case "clear sky":
        return "https://vod-progressive.akamaized.net/exp=1705705546~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F947%2F7%2F179739298%2F586747226.mp4~hmac=c46121abc9052efb170a62fbfbf57362b654ae7b6278498f581c031ef78739cf/vimeo-prod-skyfire-std-us/01/947/7/179739298/586747226.mp4?filename=file.mp4";
      case "rain":
        return "";
      case "overcast clouds":
        return "https://cdn.pixabay.com/vimeo/417752184/time-lapse-38125.mp4?width=640&hash=30fe55925c745d94e9573e06218f2a7cb2939b21";
      case "snow":
        return "https://cdn.pixabay.com/vimeo/390497845/storm-32082.mp4?width=640&hash=43acd1b4853998c4109e7b788592920c6d15c948";
      case "clear sky":
        return;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full h-full absolute inset-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={getVideoSource()}
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 p-8 rounded-lg w-1/2 h-1/2">
          <SearchCity setCity={setCity} />
          <WeatherDisplay city={city} />
        </div>
      </div>
    </>
  );
}
