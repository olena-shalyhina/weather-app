import React, { useCallback, useEffect, useState } from 'react';
import '../styles/SearchComponent.css';
import { getWeatherData } from '../API/WeatherService';
import { useFetching } from '../hooks/useFetching';
import LoaderComponent from './LoaderComponent';

const SearchComponent = ({ setWeathers }) => {
  const [city, setCity] = useState('TALLINN');
  const [cityName, setCityName] = useState('');

  const loadWeathers = useCallback(
    async (cityToSearch) => {
      const weathers = await getWeatherData(cityToSearch);
      setWeathers(weathers.forecast.forecastday);
      setCityName(weathers.location.name.toUpperCase());
      setCity('');
    },
    [setWeathers]
  );
  const [fetchWeathers, isWeathersLoading, weatherError] =
    useFetching(loadWeathers);

  useEffect(() => {
    fetchWeathers('TALLINN');
  }, [fetchWeathers]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeathers(city);
  };

  return (
    <div>
      <form className="search_group" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city..."
          aria-label="City name"
          maxLength={20}
          onChange={(event) => {
            setCity(
              event.target.value
                .replace(/[^A-Za-zА-Яа-яЁё\s'-]/gi, '')
                .toUpperCase(),
            );
          }}
          value={city}
        />
        <button type="submit" aria-label="Search" title="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.3" />
            <path d="m15.5 15.5 4.2 4.2" />
          </svg>
        </button>
      </form>
      <div className="warning">
        {weatherError && (
          <p>Не удалось загрузить погоду. Проверьте название города и настройки API.</p>
        )}
      </div>
      {isWeathersLoading ? <LoaderComponent /> : <h1>{cityName}</h1>}
    </div>
  );
};

export default SearchComponent;
