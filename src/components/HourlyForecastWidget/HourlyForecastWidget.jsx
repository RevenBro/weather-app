import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

import { Send, Moon } from 'lucide-react'

const HourlyForecastWidget = ({data}) => {
  const {
    date, icon, summary, temperature, precipitation, wind
  } = data;

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date()),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date().setMinutes(0)),
  }

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(date).setMinutes(0)),
  }

  weather_date.day = weather_date.day === now_date.day && weather_date.time === now_date.time ? "Today" : weather_date.time === "00:00" ? weather_date.day : ""
  
  return (
    <div className='mt-10'>
      <div className='flex flex-col gap-3 text-center'>
                   <p>{weather_date.day}</p>
                   <div className='rounded-3xl p-4 sm:p-7 border-green-400 border-[1.5px] flex flex-col items-center gap-1'>
                     <p className='text-[#F0EFEF] opacity-80 text-[14px]'>{weather_date.time}</p>
                     <WeatherIcon iconNumber={icon} summary={summary}/>
                     <p className='text-[#F0EFEF] opacity-80'>{Math.round(temperature)} °C</p>
                     <div className='flex items-center justify-center gap-1'>
                       {/* <img src={Moon} alt="Precipitaion" width={15} height={15}/> */}
                       <Moon width={15} height={15}/>
                       <p className='text-[#F0EFEF] opacity-80 text-[14px]'>{Math.round(precipitation.total)} mm/h</p>
                     </div>
                     <div className='flex items-center justify-center gap-1'>
                       <p className='text-[#F0EFEF] opacity-80 text-[14px]'>{Math.round(wind.speed)} mph </p>
                       <Send style={{ transform: `rotate(${-45 + wind.angle}deg)`}} width={15} height={15}/>
                     </div>
                   </div>
      </div>
      </div>
  )
}

export default HourlyForecastWidget