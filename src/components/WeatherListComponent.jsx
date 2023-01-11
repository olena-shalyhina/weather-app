import React from 'react';
import '../styles/WeatherComponent.css';
import WeatherComponent from './WeatherComponent';

const WeatherListComponent = ({
  weathers,
}) => {
  console.log(weathers.weathers);
  return (
    <div>
      <h1>
        {
          weathers.weathers.location
            .name
        }
      </h1>
      <div className="weather_container">
        {weathers.map((weather) => (
          <WeatherComponent
            weather={weather}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherListComponent;
