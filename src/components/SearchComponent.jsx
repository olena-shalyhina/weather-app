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

  useEffect(() => {
    fetchWeathers();
    console.log(city);
  }, []);

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

  const handlerClick = () => {
    fetchWeathers();
    setCity('');
  };

  return (
    <div>
      <div className="search_group">
        <input
          placeholder="Enter City..."
          onChange={(event) => {
            setCity(
              event.target.value.toUpperCase()
            );
          }}
          value={city}
        ></input>
        <button onClick={handlerClick}>
          Search
        </button>
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

// if (name !== { city }) {
//   return (
//     <h1
//       style={{
//         textAlign: 'center',
//         color: 'teal',
//       }}
//     >
//       Город не найден
//     </h1>
//   );
// }
// };
