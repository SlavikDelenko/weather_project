import React from 'react';

interface WeatherItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface WeeksWeatherProps {
  city: string;
  forecastData: { list: WeatherItem[] };
  isCelsius: boolean;
}

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);
const celsiusToFahrenheit = (celsius: number): number => Math.round((celsius * 9) / 5 + 32);

const getDayOfWeek = (date: string): string => {
  const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  const dayIndex = new Date(date).getDay();
  return daysOfWeek[dayIndex];
};

// Розширення інтерфейсу DateTimeFormatOptions
interface ExtendedDateTimeFormatOptions extends Intl.DateTimeFormatOptions {
  locale?: string;
}

// Стилізація скролбара
const styles = `
  .scrollbar {
    scrollbar-width: thin;
    scrollbar-color: darkgrey #282c34; /* Колір доріжки і кінцевого маркера скролбара */
  }

    .scrollbar::-webkit-scrollbar {
    width: 13px; /* Ширина скролбара */
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #282c34; /* Колір маркера скролбара */
    border-radius: 6px; /* Радіус кути маркера скролбара */
  }

  .scrollbar::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const WeeksWeather: React.FC<WeeksWeatherProps> = ({ city, forecastData, isCelsius }) => {
  return (
    <div className="mx-auto p-4">
      <style>{styles}</style>
      <h2 className="text-xl font-semibold mb-5 mt-5">{`Тижневий прогноз для ${city}`}</h2>
      <ul className={`flex -mx-20 overflow-x-auto scrollbar`}>
        {forecastData.list.map((item: WeatherItem) => (
          <li key={item.dt_txt} className="px-2">
            <div className="text-white bg-black bg-opacity-50 rounded-lg p-4 shadow-lg w-56 h-52">
              <p className="font-semibold">{getDayOfWeek(item.dt_txt)}</p>
              <p>{`Дата: ${new Date(item.dt_txt).getDate()} ${new Intl.DateTimeFormat('uk-UA', { month: 'long' } as ExtendedDateTimeFormatOptions).format(new Date(item.dt_txt))}`}</p>
              <p>{`Температура: ${isCelsius ? kelvinToCelsius(item.main.temp) : celsiusToFahrenheit(kelvinToCelsius(item.main.temp))}°${isCelsius ? 'C' : 'F'}`}</p>
              <p><span role="img" aria-label="humidity">💧</span>{`Вологість: ${item.main.humidity}%`}</p>
              <p><span role="img" aria-label="description">☁</span>{`Опис: ${item.weather[0].description}`}</p>
              <p><span role="img" aria-label="wind">🍃</span>{`Вітер: ${item.wind.speed} м/с`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default WeeksWeather;
