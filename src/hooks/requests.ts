import { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
    humidity: number; // Додано вологість
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number; // Додано швидкість вітру
  };
}

interface ForecastData {
  list: {
    main: {
      temp: number;
      humidity: number; // Додано вологість
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number; // Додано швидкість вітру
    };
    dt_txt: string;
  }[];
}

interface WeatherApiHook {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  loading: boolean;
  error: string | null;
}

const useWeatherApi = (city: string): WeatherApiHook => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'be062ae90cf3d3303f85298bf828843e';

        // Current weather API URL
        const currentWeatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const currentWeatherResponse = await axios.get<WeatherData>(currentWeatherApiUrl);
        setWeatherData(currentWeatherResponse.data);

        // Forecast API URL (adjust `cnt` parameter to get more days of forecast)
        const forecastApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&cnt=3`;
        const forecastResponse = await axios.get<ForecastData>(forecastApiUrl);
        setForecastData(forecastResponse.data);

        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError('Error fetching weather data');
        setWeatherData(null);
        setForecastData(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  return { weatherData, forecastData, loading, error };
};

export default useWeatherApi;
