import React, { useState } from 'react';
import './App.css';
import DateTodayComponent from './components/DateTodayComponent';
import SearchComponent from './components/SearchComponent';
import WeatherListComponent from './components/WeatherListComponent';
import BackgroundPicker from './components/BackgroundPicker';

const backgrounds = [
  {
    id: 'bg1',
    src: require('./images/optimized/bg1.webp'),
    thumbnail: require('./images/thumbnails/bg1.webp'),
  },
  {
    id: 'bg2',
    src: require('./images/optimized/bg2.webp'),
    thumbnail: require('./images/thumbnails/bg2.webp'),
  },
  {
    id: 'bg3',
    src: require('./images/optimized/bg3.webp'),
    thumbnail: require('./images/thumbnails/bg3.webp'),
  },
  {
    id: 'bg4',
    src: require('./images/optimized/bg4.webp'),
    thumbnail: require('./images/thumbnails/bg4.webp'),
  },
  {
    id: 'bg5',
    src: require('./images/optimized/bg5.webp'),
    thumbnail: require('./images/thumbnails/bg5.webp'),
  },
  {
    id: 'bg6',
    src: require('./images/optimized/bg6.webp'),
    thumbnail: require('./images/thumbnails/bg6.webp'),
  },
  {
    id: 'bg7',
    src: require('./images/optimized/bg7.webp'),
    thumbnail: require('./images/thumbnails/bg7.webp'),
  },
  {
    id: 'bg8',
    src: require('./images/optimized/bg8.webp'),
    thumbnail: require('./images/thumbnails/bg8.webp'),
  },
];

const savedBackground = window.localStorage.getItem('weather-app-background');
const initialBackground = backgrounds.find(
  (background) => background.id === savedBackground
) || backgrounds.find((background) => background.id === 'bg7');

function App() {
  const [weathers, setWeathers] =
    useState([]);
  const [activeBackground, setActiveBackground] =
    useState(initialBackground);

  const selectBackground = (background) => {
    setActiveBackground(background);
    window.localStorage.setItem('weather-app-background', background.id);
  };

  const date = new Date();

  return (
    <div className="App">
      <div
        className="wrapper"
        style={{ '--background-image': `url("${activeBackground.src}")` }}
      >
        <BackgroundPicker
          backgrounds={backgrounds}
          activeBackground={activeBackground.id}
          onSelect={selectBackground}
        />
        <DateTodayComponent date={date} />
        <SearchComponent setWeathers={setWeathers} />
        <WeatherListComponent
          weathers={weathers}
        />
      </div>
    </div>
  );
}
export default App;
