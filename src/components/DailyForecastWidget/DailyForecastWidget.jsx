import React, { useContext } from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherContext from '../../context/weather.context';

const DailyForecastWidget = ({data}) => {
  const { units } = useContext(WeatherContext);
  const {
    day, icon, summary, temperature_max, temperature_min, precipitation
  } = data;  

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date())
  }

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date(day))
  }

  weather_date.day = now_date.day === weather_date.day ? "Today" : weather_date.day
  
  return (
    <div className='my-10'>
      <div className='flex flex-col gap-3 text-center'>
        <p>{weather_date.day}</p>
        <div className='rounded-3xl p-4 sm:p-7 border-green-400 border-[1.5px] flex flex-col items-center '>
          <p className='text-[#F0EFEF] opacity-80 text-[14px]'>{}</p>
          <WeatherIcon iconNumber={icon} summary={summary}/>
          <p className='text-[#F0EFEF] opacity-80'>{Math.round(temperature_max)} {units.temperature}</p>
          <p className='text-[#F0EFEF] opacity-80'>{Math.round(temperature_min)} {units.temperature}</p>
          <div className='flex items-center justify-center mt-2'>
            <p className='text-[#F0EFEF] opacity-80 text-[14px]'>{Math.round(precipitation.total)} {units.precipitation}</p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default DailyForecastWidget