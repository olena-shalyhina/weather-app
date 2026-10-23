import React from 'react';
import '../styles/WeatherComponent.css';

const WeatherItemComponent = (props) => {
  const date = new Date(`${props.date}T00:00:00`);
  const isToday = date.toDateString() === new Date().toDateString();
  const dateLabel = isToday
    ? 'Today'
    : date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

  return (
    <div>
      <div className="weather">
        <div>
          <p className="date">{dateLabel}</p>
          <img src={props.icon} alt={props.text} title={props.text}></img>
        </div>
        <div className="temperatures">
          <p className="temp temp_high">
            <span>High</span>
            {props.tempmax}°
          </p>
          <p className="temp temp_low">
            <span>Low</span>
            {props.tempmin}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItemComponent;
