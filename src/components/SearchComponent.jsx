import React, { useState } from 'react';
import '../styles/SearchComponent.css';

const SearchComponent = () => {
  const [city, setCity] = useState('');

  return (
    <div className="search_group">
      {/* <h1>{city}</h1> */}
      <input
        placeholder="Enter City..."
        onChange={(event) =>
          setCity(event.target.value)
        }
        value={city}
      ></input>
      <button>Search</button>
    </div>
  );
};
export default SearchComponent;
