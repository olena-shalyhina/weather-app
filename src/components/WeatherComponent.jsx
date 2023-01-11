import React from 'react';
import '../styles/WeatherComponent.css';

const WeatherComponent = (weather) => {
  console.log(weather);
  return (
    <div>
      <div className="weather">
        <img
          src="113.png"
          // src={props.icon}
          alt="sun"
        ></img>
        <p className="temp">
          {weather.current.temp_c +
            ' °C'}{' '}
        </p>
        <p>
          {
            weather.current.condition
              .text
          }
        </p>
      </div>
    </div>
  );
};

export default WeatherComponent;
