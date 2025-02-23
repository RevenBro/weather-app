import React from 'react'

const WeatherInfo = ({icon, value, head, id, unit}) => {
  return (
      <div key={id} className='flex flex-col items-center'>
        <div className='flex items-center justify-center gap-1'>
          <img src={icon} alt={name} width={15} height={15} />
          <div className='flex'>
            <span className='text-[#F0EFEF] text-[12px] sm:text-[18px]'>{value}</span>
            <span className='text-[#F0EFEF] text-[12px] sm:text-[18px]'> {unit}</span>
          </div>
        </div>
          <p className='text-[#F0EFEF] text-[12px] sm:text-[18px] opacity-80'>{head}</p>
      </div>
  )
}

export default WeatherInfo