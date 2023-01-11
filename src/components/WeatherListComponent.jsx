import React from 'react';
import '../styles/WeatherComponent.css';
import WeatherComponent from './WeatherComponent';

const WeatherListComponent = (
  weathers
) => {
  console.log(weathers);
  return (
    <div>
      <h1>
        {
          weathers.weathers[0].location
            .name
        }
      </h1>
      <div className="weather_container">
        {weathers.weathers.map(
          (weather) => (
            <WeatherComponent
              key={
                weather.current.is_day
              }
              temp={
                weather.current.temp_c
              }
              text={
                weather.current
                  .condition.text
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default WeatherListComponent;
