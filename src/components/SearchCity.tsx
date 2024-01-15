// SearchCity.tsx
import React, { useState } from 'react';
import WeatherDisplay from './WeekWeather';

const SearchCity: React.FC = () => {
  const [city, setCity] = useState<string>(''); // Initialize with an empty string

  const handleSearch = () => {
    // Trigger the weather data fetch with the current city value
    if (city.trim()) {
      setCity(city.trim()); // Remove leading/trailing whitespaces and update the state
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-b border-black py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-96"
            placeholder="Enter city name"
          />
          <label
            htmlFor="city"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
          >
            {/* ... Your SVG icon here ... */}
          </label>
        </div>
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        >
          Search
        </button>
      </div>

      {/* Pass the entered city to WeatherDisplay */}
      {city && <WeatherDisplay city={city} />}
    </>
  );
};

export default SearchCity;
