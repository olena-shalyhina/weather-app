import React, { useState } from 'react';
import '../styles/SearchComponent.css';
import { getWeatherData } from '../API/WeatherService';
import { useEffect } from 'react';

const SearchComponent = ({
  // name,
  // fatchWeathers,
  setWeathers,
}) => {
  const [city, setCity] =
    useState('Tallinn');

  useEffect(() => {
    fetchWeathers();
    console.log(city);
  }, []);

  async function fetchWeathers() {
    const weathers =
      await getWeatherData(city);
    setWeathers(weathers);
  }

  console.log(city);
  return (
    <div>
      <div className="search_group">
        <input
          placeholder="Enter City..."
          onChange={(event) => {
            setCity(event.target.value);
          }}
          value={city}
        ></input>
        <button onClick={fetchWeathers}>
          Search
        </button>
      </div>
      <h1>{city}</h1>
    </div>
  );
  // if (name !== { city }) {
  //   return (
  //     <h1
  //       style={{
  //         textAlign: 'center',
  //         color: 'teal',
  //       }}
  //     >
  //       Город не найден!
  //     </h1>
  //   );
  // }
};
export default SearchComponent;
