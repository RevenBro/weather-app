import React from 'react'
import Precipitaion from "../../assets/Images/precipitation.png"
import Navigation from "../../assets/Images/navigation.png"

const WeatherCard = ({weatherstatusimg, text, weekly}) => {
  return (
    <div className='flex flex-col gap-3 text-center'>
    <p>{text ? text : ""}</p>
    {weekly ? <div className='rounded-3xl p-4 sm:p-7 border-green-400 border-[1.5px] flex flex-col items-center gap-1'>
      <p className='text-[#F0EFEF] opacity-80 text-[14px]'>00:00</p>
      <img className='my-1' src={weatherstatusimg} alt="weather status" width={25} height={25}/>
      <p className='text-[#F0EFEF] opacity-80'>19 °C</p>
      <div className='flex items-center justify-center gap-1'>
        <img src={Precipitaion} alt="Precipitaion" width={15} height={15}/>
        <p className='text-[#F0EFEF] opacity-80 text-[14px]'>0 in/h</p>
      </div>
      <div className='flex items-center justify-center gap-1'>
        <p className='text-[#F0EFEF] opacity-80 text-[14px]'>3 mph</p>
        <img className='rotate-45' src={Navigation} alt="Precipitaion" width={15} height={15}/>
      </div>
    </div> : 
    <div className='rounded-3xl p-4 sm:p-7 border-green-400 border-[1.5px] flex flex-col items-center'>
      <img className='my-1' src={weatherstatusimg} alt="weather status" width={30} height={30}/>
      <p className='text-[#F0EFEF] opacity-80'>22 °C</p>
      <p className='text-[#F0EFEF] opacity-80'>19 °C</p>
      <div className='flex items-center justify-center gap-1 mt-2'>
        <img src={Precipitaion} alt="Precipitaion" width={15} height={15}/>
        <p className='text-[#F0EFEF] opacity-80 text-[14px]'>0 in/h</p>
      </div>
    </div>
    }
    
    </div>
  )
}

export default WeatherCard