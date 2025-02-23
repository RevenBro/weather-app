import React from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherCard from '../WeatherCard/WeatherCard';
import HorizontallyScrollable from '../HorizonalScroll/HorizontalScroll';

import CloudlySun from "../../assets/Images/cloudly-sun.png";
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
  return (
    <div className='bg-black min-h-screen px-5 pt-5'>
      {/* Block 1 */}
      <div className='flex flex-col sm:flex-col md:flex-row w-full justify-between gap-5'>
        {/* Left block */}
        <div className='bg-transparent border-green-400 rounded-3xl border-[1.5px] p-8 w-full md:w-1/4'>
          <img className='mb-4' src={CloudlySun} alt="Cloudly" width={50} height={50} />
          <h2 className='text-[#F0EFEF] text-5xl font-medium mb-1'>10 °C</h2>
          <p className='text-[#F0EFEF] opacity-70 font-light text-[15px]'>feels like 10 °C</p>
          <div className='my-5'>
            <span className='text-[#F0EFEF] text-xl font-sans'>Mostly cloudy</span>
          </div>
        </div>

        {/* Right block */}
        <div className='w-full md:w-3/4 flex flex-col p-8 justify-center items-stretch gap-10 bg-transparent border-green-400 rounded-3xl border-[1.5px]'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
            <WeatherInfo img={Precipitation} info={"0 in/h"} body={"Precipitation"}/>
            <WeatherInfo img={Humidity} info={"48%"} body={"Humidity"}/>
            <WeatherInfo img={Cloud} info={"50%"} body={"Clouds cover"}/>
            <WeatherInfo img={Wind} info={"6 mph"} body={"Wind"}/>
            <WeatherInfo img={UVIndex} info={"1"} body={"UV Index"}/>
            <WeatherInfo img={Visibility} info={"20 mi"} body={"Visibility"}/>
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