import React, { useState } from 'react';
import useWeatherApi from '../hooks/requests';
import WeeksWeather from './WeeksWeather';
import Loaders from '../Loaders/Loaders';

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);
const celsiusToFahrenheit = (celsius: number): number => Math.round((celsius * 9) / 5 + 32);

const WeatherDisplay: React.FC<{ city: string }> = ({ city }) => {
  const { weatherData, forecastData, loading, error } = useWeatherApi(city);
  const [isCelsius, setIsCelsius] = useState(true);

  if (loading) {

    return <Loaders />;
  }

  const toggleUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  return (
    <div>
      {weatherData && (
        <div className="p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Поточна погода в {city}</h1>
          <p className="text-6xl font-bold mb-4">
            {isCelsius ? kelvinToCelsius(weatherData.main.temp) : celsiusToFahrenheit(kelvinToCelsius(weatherData.main.temp))}°
            {isCelsius ? 'C' : 'F'}
          </p>
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

      {forecastData && <WeeksWeather city={city} forecastData={forecastData} isCelsius={isCelsius} />}

      {/* Add the button to toggle between Celsius and Fahrenheit */}
      <button onClick={toggleUnit}>
        Змінити на {isCelsius ? '°F' : '°C'}
      </button>
    </div>
  );
};

export default WeatherDisplay;
