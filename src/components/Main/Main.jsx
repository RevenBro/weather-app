import React, { useContext } from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import Forecast from '../Forecast/Forecast';
import WeatherContext from '../../context/weather.context';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import Precipitation from "../../assets/Images/precipitation.png";
import Humidity from "../../assets/Images/humidity.png";
import Cloud from "../../assets/Images/cloud.png";
import Wind from "../../assets/Images/wind.png";
import UVIndex from "../../assets/Images/glasses.png";
import Visibility from "../../assets/Images/view.png";
import Loader from '../Loader/Loader';


const Main = () => {
  const { loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext);
  const { units } = useContext(WeatherContext);

  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind
  } = currentWeather;
  
  const otherInfoWidgets = [
    {
      id: 0,
      icon: Precipitation,
      head: 'Precipitation',
      value: Math.round(precipitation?.total),
      unit: units?.precipitation
    },
    {
      id: 1,
      icon: Wind,
      head: 'Wind',
      value: Math.round(wind?.speed),
      unit: units?.wind_speed
    },
    {
      id: 2,
      icon: Humidity,
      head: 'Humidity',
      value: Math.round(humidity),
      unit: units?.humidity
    },
    {
      id: 3,
      icon: UVIndex,
      head: 'UV index',
      value: Math.round(uv_index),
      unit: units?.uv_index
    },
    {
      id: 4,
      icon: Cloud,
      head: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: units?.cloud_cover
    },
    {
      id: 5,
      icon: Visibility,
      head: 'Visibility',
      value: Math.round(visibility),
      unit: units?.visibility
    },
  ]
  
  if (loading ) return <Loader />;

  return (
    <div className='bg-black min-h-screen px-5 pt-5'>
      {/* Block 1 */}
      <div className='flex flex-col sm:flex-col md:flex-row w-full justify-between gap-5'>
        {/* Left block */}
        <div className='bg-transparent border-green-400 rounded-3xl border-[1.5px] p-8 w-full md:w-1/4'>
        <WeatherIcon iconNumber={icon_num} summary={summary}/>
    
          <h2 className='text-[#F0EFEF] text-5xl font-medium mb-1'>{temperature} {units.temperature}</h2>
          <p className='text-[#F0EFEF] opacity-70 font-light text-[15px]'>feels like {feels_like} {units.temperature}</p>
          <div className='my-2'>
            <span className='text-[#F0EFEF] text-xl font-sans'>{summary}</span>
          </div>
        </div>

        {/* Right block */}
        <div className='w-full md:w-3/4 flex flex-col p-8 justify-center items-stretch gap-10 bg-transparent border-green-400 rounded-3xl border-[1.5px]'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
            {otherInfoWidgets.map(({id, icon, head, value, unit}) => (
              <WeatherInfo key={id} icon={icon} value={value} unit={unit} head={head}/>
            ))}
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <Forecast type='hourly' title='HOURLY FORECAST' data={hourlyForecast}/>

      {/* Block 3 */}
      <Forecast type='daily' title='21 DAYS FORECAST' data={dailyForecast}/>
    </div>
  )
};

export default Main;