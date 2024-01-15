import React from 'react';
import useWeatherApi from '../hooks/requests';

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);

const WeatherDisplay: React.FC<{ city: string }> = ({ city }) => {
  const { weatherData, forecastData, loading, error } = useWeatherApi(city);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h1>Поточна погода в {city}</h1>
          <p>Температура: {kelvinToCelsius(weatherData.main.temp)}°C</p>
          <p>Вологість: {weatherData.main.humidity}%</p>
          <p>Опис погоди: {weatherData.weather[0].description}</p>
          <p>Швидкість вітру: {weatherData.wind.speed} м/с</p>
        </div>
      )}

      {forecastData && (
        <div>
          <h2>Тижневий прогноз погоди</h2>
          <ul>
            {forecastData.list.map((item) => (
              <li key={item.dt_txt}>
                <p>Дата: {item.dt_txt}</p>
                <p>Температура: {kelvinToCelsius(item.main.temp)}°C</p>
                <p>Вологість: {item.main.humidity}%</p>
                <p>Опис погоди: {item.weather[0].description}</p>
                <p>Швидкість вітру: {item.wind.speed} м/с</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
