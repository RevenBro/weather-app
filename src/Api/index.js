import currentWeather from "./current-weather.json"
import dailyForecast from "./daily-forecast.json"
import hourlyForecasts from "./hourly-forecast.json"

function getCurrentWeather() {
  return currentWeather.current;
}

function getDailyForecast() {
  return dailyForecast.daily.data;
}

function getHourlyForecast() {
  return hourlyForecasts.hourly.data;
}

export { getCurrentWeather, getDailyForecast, getHourlyForecast };