import React from 'react'

const WeatherInfo = ({img, info, body}) => {
  return (
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center gap-1'>
          <img src={img} alt="Precipitation" width={15} height={15} />
            <span className='text-[#F0EFEF] text-[12px] sm:text-[18px]'>{info}</span>
        </div>
          <p className='text-[#F0EFEF] text-[12px] sm:text-[18px] opacity-80'>{body}</p>
      </div>
  )
}

export default WeatherInfo