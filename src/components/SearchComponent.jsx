import React, { useState } from 'react';
import '../styles/SearchComponent.css';
import { getWeatherData } from '../API/WeatherService';
import { useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import LoaderComponent from './LoaderComponent';

const SearchComponent = ({
  setWeathers,
}) => {
  const [city, setCity] =
    useState('TALLINN');
  const [cityName, setCityName] =
    useState('');

  useEffect(() => {
    fetchWeathers();
    console.log(city);
  }, []);

  const [
    fetchWeathers,
    isWeathersLoading,
    weatherError,
  ] = useFetching(async () => {
    const weathers =
      await getWeatherData(city);
    setWeathers(
      weathers.forecast.forecastday
    );
    setCityName(
      weathers.location.name.toUpperCase()
    );
  });
  console.log(weatherError);
  // async function fetchWeathers() {
  //   const weathers =
  //     await getWeatherData(city);
  //   setWeathers(
  //     weathers.forecast.forecastday
  //   );
  //   setCityName(
  //     weathers.location.name.toUpperCase()
  //   );
  // }

  const handleClick = () => {
    fetchWeathers();
    setCity('');
  };

  return (
    <div>
      <div className="search_group">
        <input
          type="text"
          placeholder="Enter City..."
          maxLength={20}
          onChange={(event) => {
            setCity(
              event.target.value
                .replace(
                  /[^A-Za-zА-Яа-яЁё\`]/gi,
                  ''
                )
                .toUpperCase()
            );
          }}
          value={city}
        ></input>
        <button onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="warning">
        {weatherError && (
          <p>
            Сity not found, please try
            again
          </p>
        )}
      </div>
      {isWeathersLoading ? (
        <LoaderComponent />
      ) : (
        <h1>{cityName}</h1>
      )}
    </div>
  );
};

export default SearchComponent;
