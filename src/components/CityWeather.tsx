import React from 'react';
import useWeatherApi from '../hooks/requests';
import WeeksWeather from './WeeksWeather';
import Loaders from '../loaders/Loaders';

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);

const WeatherDisplay: React.FC<{ city: string }> = ({ city }) => {
  const { weatherData, forecastData, loading, error } = useWeatherApi(city);
  
  // if (loading) {
  //   return <Loaders/>;
  // }

  return (
    <div>
      {weatherData && (
         <div className="p-8 text-white">
         <h1 className="text-4xl font-bold mb-4">Поточна погода в {city}</h1>
         <p className="text-6xl font-bold mb-4">{kelvinToCelsius(weatherData.main.temp)}°C</p>
         <div className="ml-4">
           <p className="text-lg">
             <span role="img" aria-label="humidity">&#x1F4A7;</span> Вологість: {weatherData.main.humidity}%
           </p>
           <p className="text-lg">
             <span role="img" aria-label="description">&#x2601;</span> Опис погоди: {weatherData.weather[0].description}
           </p>
           <p className="text-lg">
             <span role="img" aria-label="wind">&#x1F343;</span> Швидкість вітру: {weatherData.wind.speed} м/с
           </p>
         </div>
         
       </div>
      )}

    {forecastData && <WeeksWeather city={city} forecastData={forecastData} />}
    </div>
  );
};

export default WeatherDisplay;