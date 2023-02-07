import axios from 'axios';

const api = {
  key: '483c7672b68b410e8c093851232201',
  base: 'http://api.weatherapi.com/v1/',
};
export async function getWeatherData(
  city
) {
  const response = await axios.get(
    `${api.base}forecast.json?key=${api.key}&q=${city}&days=3`
  );
  return response.data;
}
