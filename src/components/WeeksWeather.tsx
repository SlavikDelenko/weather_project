import React from 'react';

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);

export default function WeeksWeather({ city, forecastData }: any) {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-5 mt-5">{`Тижневий прогноз для ${city}`}</h2>
      <ul className="flex -mx-2 overflow-x-auto">
        {forecastData.list.map((item: any) => (
          <li key={item.dt_txt} className="px-2">
            <div className="text-white bg-black bg-opacity-50 rounded-lg p-4 shadow-lg w-56 h-52 ">
              <p className="font-semibold">Дата: {item.dt_txt}</p>
              <p>Темп: {kelvinToCelsius(item.main.temp)}°C</p>
              <p>
              <span role="img" aria-label="humidity">&#x1F4A7;</span>
                Вологість: {item.main.humidity}%
                </p>

              <p>
              <span role="img" aria-label="description">&#x2601;</span>
                Опис: {item.weather[0].description}
                </p>
              <p>
              <span role="img" aria-label="wind">&#x1F343;</span>
                Вітер: {item.wind.speed} м/с
                </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
