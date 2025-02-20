import { Map, Search, Settings, Sun } from 'lucide-react'
import React from 'react'
import Input from '../Input/Input'

const Header = () => {
  return (
    <div className='bg-[#252527] flex items-center justify-between p-5 h-[10%] gap-5 container'>
      <div className='flex items-center justify-center gap-1'>
        <Map size={20} color='lightgreen'/>
        <h2 className='text-[#feeeee] font-light '>
          <span className='font-medium'>London</span>, United Kingdom
        </h2>
      </div>

      <div className='relative'>
        <Search className='absolute top-[25%] left-[6px]' size={15} color='white'/>
        <Input/>  
      </div>
      <div className='flex items-center gap-4'>
        <Sun size={20} color='white' className='cursor-pointer'/>
        <Settings size={20} color='white' className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header