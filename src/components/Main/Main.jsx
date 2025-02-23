import React from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherCard from '../WeatherCard/WeatherCard';
import HorizontallyScrollable from '../HorizonalScroll/HorizontalScroll';
import { getCurrentWeather } from '../../Api';

import Precipitation from "../../assets/Images/precipitation.png";
import Humidity from "../../assets/Images/humidity.png";
import Cloud from "../../assets/Images/cloud.png";
import Wind from "../../assets/Images/wind.png";
import UVIndex from "../../assets/Images/glasses.png";
import Visibility from "../../assets/Images/view.png";
import Moon from "../../assets/Images/moon.png"
import Sun from "../../assets/Images/sun-icon.png"
import Rainy from "../../assets/Images/rainy.png"

const Main = () => {
  const data = getCurrentWeather();
  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind
  } = data;

  const otherInfoWidgets = [
    {
      id: 0,
      icon: Precipitation,
      head: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: 'in/h'
    },
    {
      id: 1,
      icon: Wind,
      head: 'Wind',
      value: Math.round(wind.speed),
      unit: 'mph'
    },
    {
      id: 2,
      icon: Humidity,
      head: 'Humidity',
      value: Math.round(humidity),
      unit: '%'
    },
    {
      id: 3,
      icon: UVIndex,
      head: 'UV index',
      value: Math.round(uv_index),
      unit: '%'
    },
    {
      id: 4,
      icon: Cloud,
      head: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: '%'
    },
    {
      id: 5,
      icon: Visibility,
      head: 'Visibility',
      value: Math.round(visibility),
      unit: 'mi'
    },
  ]

  return (
    <div className='bg-black min-h-screen px-5 pt-5'>
      {/* Block 1 */}
      <div className='flex flex-col sm:flex-col md:flex-row w-full justify-between gap-5'>
        {/* Left block */}
        <div className='bg-transparent border-green-400 rounded-3xl border-[1.5px] p-8 w-full md:w-1/4'>
        <img src={`/dist/weather_icons/set04/big/${icon_num}.png`} />
    
          <h2 className='text-[#F0EFEF] text-5xl font-medium mb-1'>{temperature} °C</h2>
          <p className='text-[#F0EFEF] opacity-70 font-light text-[15px]'>feels like {feels_like} °C</p>
          <div className='my-2'>
            <span className='text-[#F0EFEF] text-xl font-sans'>{summary}</span>
          </div>
        </div>

        {/* Right block */}
        <div className='w-full md:w-3/4 flex flex-col p-8 justify-center items-stretch gap-10 bg-transparent border-green-400 rounded-3xl border-[1.5px]'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
            {otherInfoWidgets.map(({id, icon, head, value, unit}) => (
              <WeatherInfo id={id} icon={icon} value={value} unit={unit} head={head}/>
            ))}
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className='mt-10'>
        <div className='text-[#F0EFEF]'>
          <h2 className='font-medium ml-3 text-xl mb-2 text-center sm:text-start'>HOURLY FORECAST</h2>
          <p className='font-bold text-[14px] mb-5 text-center'>Tue 25/06</p>
          <HorizontallyScrollable className="flex justify-between gap-1 p-2">
              <WeatherCard weatherstatusimg={Rainy} weekly/>
              <WeatherCard weatherstatusimg={Sun} weekly/>
              <WeatherCard weatherstatusimg={Moon} weekly/>
              <WeatherCard weatherstatusimg={Sun} weekly/>
              <WeatherCard weatherstatusimg={Moon} weekly/>
              <WeatherCard weatherstatusimg={Sun} weekly/>
              <WeatherCard weatherstatusimg={Moon} weekly/>
              <WeatherCard weatherstatusimg={Rainy} weekly/>
              <WeatherCard weatherstatusimg={Sun} weekly/>
          </HorizontallyScrollable>
        </div>
      </div>

      {/* Block 3 */}
      <div className='mt-10'>
        <div className='text-[#F0EFEF]'>
          <h2 className='ml-3 font-medium text-xl mb-2 text-center sm:text-start'>WEEKLY FORECAST</h2>
          <HorizontallyScrollable className="flex justify-between gap-1 p-2">
              <WeatherCard weatherstatusimg={Rainy} text={"Today"}/>
              <WeatherCard weatherstatusimg={Sun} text={"Tuesday"}/>
              <WeatherCard weatherstatusimg={Moon} text={"Wednesday"}/>
              <WeatherCard weatherstatusimg={Sun} text={"Thursday"}/>
              <WeatherCard weatherstatusimg={Moon} text={"Friday"}/>
              <WeatherCard weatherstatusimg={Sun} text={"Saturday"}/>
              <WeatherCard weatherstatusimg={Moon} text={"Sunday"}/>
          </HorizontallyScrollable>
        </div>
      </div>
    </div>
  );
};

export default Main;