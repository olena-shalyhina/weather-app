import React from 'react';
import '../styles/WeatherComponent.css';

const WeatherComponent = (props) => {
  console.log(props);
  return (
    <div>
      <div className="weather">
        <img
          src="113.png"
          // src={props.icon}
          alt="sun"
        ></img>
        <p className="temp">
          {props.temp + ' °C'}{' '}
        </p>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default WeatherComponent;
