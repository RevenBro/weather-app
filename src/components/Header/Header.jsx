import { Map, Search, Sun } from 'lucide-react'
import React, { useContext } from 'react'
import Input from '../Input/Input'
import WeatherContext from '../../context/weather.context'
import SettingsIcon from '../Settings/Settings'

const Header = () => {
  const {place} = useContext(WeatherContext);

  return (
    <div className='bg-[#252527] flex items-center justify-between p-2 md:p-5 h-[10%] sm:gap-2 gap-1 container mx-auto'>
      <div className='flex items-center justify-center gap-1'>
        <Map size={20} color='lightgreen'/>
        <h2 className='text-[#feeeee] font-light text-[7px] sm:text-[20px]'>
          <span className='font-medium'>{place.name}</span>, {place.country}
        </h2>
      </div>

      <div className='relative'>
        <Search className='absolute top-[25%] left-[6px]' size={15} color='white'/>
        <Input/>  
      </div>
      <div className='flex items-center gap-1 sm:gap-3'>
        <Sun color='white' className='cursor-pointer'/>
        <SettingsIcon/>
      </div>
    </div>
  )
}

export default Header