import React, { useState } from 'react';
import './App.css';
import DateTodayComponent from './components/DateTodayComponent';
import SearchComponent from './components/SearchComponent';
import WeatherListComponent from './components/WeatherListComponent';

function App() {
  const [weathers, setWeathers] =
    useState([]);

  const date = new Date();

  return (
    <div className="App">
      <div className="wrapper">
        <DateTodayComponent
          date={date}
        />
        <SearchComponent
          setWeathers={setWeathers}
        />
        <WeatherListComponent
          weathers={weathers}
        />
      </div>
    </div>
  );
}
export default App;
