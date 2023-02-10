import axios from 'axios';

export async function getWeatherData(
  city
) {
  const env = process.env.NODE_ENV;
  const key =
    process.env[
      `REACT_APP_API_KEY_${env}`
    ];
  const base =
    process.env[
      `REACT_APP_API_BASE_${env}`
    ];

  const response = await axios.get(
    `${base}forecast.json?key=${key}&q=${city}&days=3`
  );
  return response.data;
}
