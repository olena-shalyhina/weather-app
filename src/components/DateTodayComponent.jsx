import React from 'react';
import '../styles/DateTodayComponent.css';

const DateTodayComponent = (props) => {
  const dateLabel = props.date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="date_today">
      {dateLabel}
    </div>
  );
};

export default DateTodayComponent;
