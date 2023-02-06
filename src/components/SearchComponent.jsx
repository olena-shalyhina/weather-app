import React, { useState } from 'react';
import '../styles/SearchComponent.css';
import { getWeatherData } from '../API/WeatherService';
import { useEffect } from 'react';

const SearchComponent = ({
  setWeathers,
}) => {
  const [city, setCity] = useState(
    'TALLINN'
    // 'Tallinn'.toUpperCase()
  );

  const [cityName, setCityName] =
    useState('');

  useEffect(() => {
    fetchWeathers();
    console.log(city);
  }, []);

  async function fetchWeathers() {
    const weathers =
      await getWeatherData(city);
    setWeathers(
      weathers.forecast.forecastday
    );
    setCityName(
      weathers.location.name.toUpperCase()
    );
    setCity('');
  }

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
        <button onClick={fetchWeathers}>
          Search
        </button>
      </div>
      <h1>{cityName}</h1>
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
