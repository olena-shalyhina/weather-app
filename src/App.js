import React, { useState } from 'react';
import './App.css';
import DateTodayComponent from './components/DateTodayComponent';
import SearchComponent from './components/SearchComponent';
import WeatherListComponent from './components/WeatherListComponent';

function App() {
  const [weathers, setWeeathers] =
    useState([
      {
        location: {
          name: 'London',
          country: 'United Kingdom',
          tz_id: 'Europe/London',
          localtime_epoch: 1673170972,
          localtime: '2023-01-08 9:42',
        },
        current: {
          temp_c: 5.0,
          temp_f: 46.4,
          is_day: 1,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
        },
      },
      {
        location: {
          name: 'London',
          country: 'United Kingdom',
          tz_id: 'Europe/London',
          localtime_epoch: 1673170972,
          localtime: '2023-01-08 9:42',
        },
        current: {
          temp_c: 25.0,
          temp_f: 46.4,
          is_day: 2,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
        },
      },
      {
        location: {
          name: 'London',
          country: 'United Kingdom',
          tz_id: 'Europe/London',
          localtime_epoch: 1673170972,
          localtime: '2023-01-08 9:42',
        },
        current: {
          temp_c: 8.0,
          temp_f: 46.4,
          is_day: 3,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
        },
      },
    ]);
  console.log(weathers[0]);
  const date = new Date();

  return (
    <div className="App">
      <div className="wrapper">
        <DateTodayComponent
          date={date}
        />
        <SearchComponent
          name={
            weathers[0].location.name
          }
        />
        <WeatherListComponent
          weathers={weathers}
        />
      </div>
    </div>
  );
}

export default App;
