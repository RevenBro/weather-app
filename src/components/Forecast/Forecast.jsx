import React from 'react';
import HourlyForecastWidget from '../HourlyForecastWidget/HourlyForecastWidget';
import DailyForecastWidget from '../DailyForecastWidget/DailyForecastWidget';
import HorizontallyScrollable from '../HorizonalScroll/HorizontalScroll';

const Forecast = ({ title, data, type }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-400">Error found.</p>;
  }

  return (
    <div className='mt-7'>
      <div className='text-[#F0EFEF]'>
        <h2 className='ml-3 font-medium text-xl text-center sm:text-start'>{title}</h2>
        <HorizontallyScrollable className="flex flex-row items-end gap-2 px-2">
          {data.map((singleData, index) => (
            <div key={index} className="min-w-[120px]">
              {type === 'hourly' ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
};

export default Forecast;
