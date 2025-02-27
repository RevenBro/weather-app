import React, { useContext } from 'react'
import { Settings } from 'lucide-react'
import { MEASUREMENT_SYSTEMS } from '../../constants'
import WeatherContext from '../../context/weather.context';

const SettingsIcon = () => {
  const [openSettings, setOpenSettings] = React.useState(false);
  const {measurementSystem, setMeasurementSystem} = useContext(WeatherContext);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
  }

  return (
    <div onClick={() => setOpenSettings((prevVal) => !prevVal)}>
      <Settings color='white' className={`cursor-pointer ${openSettings ? "rotate-90 transition-all ease-in-out" : ""}`}/>
      <div className={`${openSettings ? 'open' : ''} settings-menu `}>
        <div>
          <h4>Measurement Systems:</h4>
          <div className='systems'>
            {
              Object.values(MEASUREMENT_SYSTEMS).map(system => (
                <div key={system} onClick={() => changeMeasurementSystem(system)} className={`${system === measurementSystem ? "active" : ""} system`}>
                  {system}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsIcon