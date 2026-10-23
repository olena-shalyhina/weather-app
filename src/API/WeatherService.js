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

  if (!key || !base) {
    throw new Error(
      'Weather API is not configured. Add the API key and base URL to .env.',
    );
  }

  const response = await axios.get(
    `${base}forecast.json?key=${encodeURIComponent(
      key,
    )}&q=${encodeURIComponent(city.trim())}&days=3`,
  );
  return response.data;
}
