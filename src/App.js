import React, { useState } from 'react';
import './App.css';
import DateTodayComponent from './components/DateTodayComponent';
import SearchComponent from './components/SearchComponent';
import WeatherListComponent from './components/WeatherListComponent';

function App() {
  const [weathers, setWeathers] =
    useState([
      // {
      //   location: {
      //     name: 'London',
      //     country: 'United Kingdom',
      //     tz_id: 'Europe/London',
      //     localtime_epoch: 1673170972,
      //     localtime: '2023-01-08 9:42',
      //   },
      //   current: {
      //     temp_c: 5.0,
      //     temp_f: 46.4,
      //     is_day: 1,
      //     condition: {
      //       text: 'Sunny',
      //       icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      //       code: 1000,
      //     },
      //   },
      // },
      // {
      //   location: {
      //     name: 'London',
      //     country: 'United Kingdom',
      //     tz_id: 'Europe/London',
      //     localtime_epoch: 1673170972,
      //     localtime: '2023-01-08 9:42',
      //   },
      //   current: {
      //     temp_c: 25.0,
      //     temp_f: 46.4,
      //     is_day: 2,
      //     condition: {
      //       text: 'Sunny',
      //       icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      //       code: 1000,
      //     },
      //   },
      // },
      // {
      //   location: {
      //     name: 'London',
      //     country: 'United Kingdom',
      //     tz_id: 'Europe/London',
      //     localtime_epoch: 1673170972,
      //     localtime: '2023-01-08 9:42',
      //   },
      //   current: {
      //     temp_c: 8.0,
      //     temp_f: 46.4,
      //     is_day: 3,
      //     condition: {
      //       text: 'Sunny',
      //       icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      //       code: 1000,
      //     },
      //   },
      // },
    ]);

  const date = new Date();

  // async function fetchWeathers(city) {
  //   const weathers =
  //     await getWeatherData(city);
  //   setWeathers(weathers);

  // console.log(weathers);
  // console.log(weathers.location.name);
  // console.log(
  //   weathers.forecast.forecastday[0]
  //     .day.maxtemp_c
  // );

  console.log(weathers);

  return (
    <div className="App">
      <div className="wrapper">
        <DateTodayComponent
          date={date}
        />
        <SearchComponent
          // name={
          //   weathers.location.name
          // }
          // search={fetchWeathers}
          setWeathers={setWeathers}
        />
        <WeatherListComponent
          weathers={weathers}
          // name={weathers.location.name}
          // // name={weathers.name}
        />
      </div>
    </div>
  );
}
export default App;
