import React from 'react';
import '../styles/WeatherComponent.css';
import WeatherItemComponent from './WeatherItemComponent';

const WeatherListComponent = ({
  weathers,
}) => {
  return (
    <div>
      <div className="weather_container">
        {weathers.map((weather) => (
          <WeatherItemComponent
            key={weather.date_epoch}
            date={weather.date}
            icon={
              weather.day.condition.icon
            }
            tempmin={Math.round(
              weather.day.mintemp_c
            )}
            tempmax={Math.round(
              weather.day.maxtemp_c
            )}
            text={
              weather.day.condition.text
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherListComponent;
