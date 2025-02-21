import React from 'react';
import CloudlySun from "../../assets/Images/cloudly-sun.png";
import Precipitation from "../../assets/Images/precipitation.png";

const Main = () => {
  return (
    <div className='bg-black min-h-screen px-5 pt-5'>
      {/* Block 1 */}
      <div className='flex flex-col sm:flex-col md:flex-row w-full justify-between gap-5'>
        {/* Left block */}
        <div className='bg-transparent border-[#68676A] rounded-3xl border-[1.5px] p-8 w-full md:w-1/4'>
          <img className='mb-4' src={CloudlySun} alt="Cloudly" width={50} height={50} />
          <h2 className='text-[#F0EFEF] text-5xl font-medium mb-1'>10 °C</h2>
          <p className='text-[#F0EFEF] opacity-70 font-light text-[15px]'>feels like 10 °C</p>
          <div className='my-5'>
            <span className='text-[#F0EFEF] text-xl font-sans'>Mostly cloudy</span>
          </div>
        </div>

        {/* Right block */}
        <div className='w-full md:w-3/4 flex flex-col p-8 justify-center items-stretch gap-10 bg-transparent border-[#68676A] rounded-3xl border-[1.5px]'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='flex items-center justify-center gap-1'>
                  <img src={Precipitation} alt="Precipitation" width={15} height={15} />
                  <span className='text-[#F0EFEF] text-[12px] sm:text-[18px]'>0 in/h</span>
                </div>
                <p className='text-[#F0EFEF] text-[12px] sm:text-[18px] opacity-80'>Precipitation</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className='mt-10'>
        <div className='text-center text-[#F0EFEF]'>
          {/* Add block 2 content here */}
        </div>
      </div>

      {/* Block 3 */}
      <div className='mt-10'>
        <div className='text-center text-[#F0EFEF]'>
          {/* Add block 3 content here */}
        </div>
      </div>
    </div>
  );
};

export default Main;