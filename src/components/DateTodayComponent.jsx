import React from 'react';
import '../styles/DateTodayComponent.css';

const DateTodayComponent = (props) => {
  let day = props.date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = props.date.toLocaleString(
    'en',
    {
      month: 'long',
    }
  );

  let year = props.date.getFullYear();

  // const [month, day, year] = [
  //   date.toLocaleString('en', {
  //     month: 'long',
  //   }),
  //   date.getDate(),
  //   date.getFullYear(),
  // ];
  return (
    <div className="date_today">
      {year} {month} {day}
    </div>
  );
};

export default DateTodayComponent;
