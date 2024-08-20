import React from 'react';
import '../styles/WeatherComponent.css';

const WeatherItemComponent = (props) => {
  return (
    <div>
      <div className="weather">
        <div>
          <p className="date">{props.date}</p>
          <img src={props.icon} alt="weather icon" title={props.text}></img>
        </div>
        <div>
          <p className="temp">
            <span>{'min '}</span>
            {props.tempmin + ' °C'}
          </p>
          <p className="temp">
            <span>{'max '}</span>
            {props.tempmax + ' °C'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItemComponent;
