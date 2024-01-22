import React, { useState, useEffect } from "react";
import WeatherDisplay from "./CityWeather";

interface SearchCityProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCity: React.FC<SearchCityProps> = ({ setCity }) => {
  const [cityInput, setCityInput] = useState<string>("");
  const [customCityEntered, setCustomCityEntered] = useState<boolean>(false);

  useEffect(() => {
    const trimmedCity = cityInput.trim();
    if (trimmedCity) {
      setCity(trimmedCity);
      setCustomCityEntered(true);
    } else {
      setCity("Lviv");
      setCustomCityEntered(false);
    }

  }, [cityInput, setCity]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            id="city"
            name="city"
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onBlur={() => {
              if (!customCityEntered) {
                setCity("Lviv");
              }
            }}
            className="border-b border-black py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-96"
            placeholder="Enter city name"
          />
          <label
            htmlFor="city"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
          ></label>
        </div>
      </div>

      {cityInput && <WeatherDisplay city={cityInput} />}
    </>
  );
};

export default SearchCity;
