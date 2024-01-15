import React from 'react';
import SearchCity from './SearchCity';
import WeatherDisplay from './WeekWeather';

export default function Weather() {
  const city = 'Lviv';
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
            >
              <source src="https://cdn.pixabay.com/vimeo/284467863/clouds-17723.mp4?width=1280&hash=630d4b8671ccfbab803d700b604836277871f82a" />
            </video>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-70 p-8 rounded-lg w-1/2 h-1/2">
            <SearchCity />
            <WeatherDisplay city={city} />
            
        </div>


      </div>
    </>
  );
}

