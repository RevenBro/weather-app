import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {

  const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: 'en',
      units: measurementSystem
    },
    headers: {
      'x-rapidapi-key': '99b4099a6cmsh170d3543ef010f0p124e05jsn505f226853fa',
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}