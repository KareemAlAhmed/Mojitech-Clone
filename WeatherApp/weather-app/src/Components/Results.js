import React,{useRef, useEffect} from 'react';
import './Results.css'
import cloudy from '../assets/raining-cloud.png'


function Results({weather}) {
  const refInput = useRef()
  const weatherRef = useRef()

  useEffect(()=>{
    weatherRef.current.classList.add(weather.weather[0].main)
  },[])
  
  
  
  return (
    <div className={`results img ${weather.weather[0].main}`} ref={weatherRef} >
      <div className='logo'>the.weather</div>
      <div className='finalInfo'>
          <div className='temp'>{Math.round(weather.main.temp)}°</div>
          <div className='location'>{weather.name}</div>
          <div className='weatherSituation'>
            <img src={cloudy} className='cloudyIcon'/>
            <div className='weatherName'>{weather.weather[0].main}</div>
          </div>
      </div>
      {console.log(weatherRef)}
 
    </div>
  )
}

export default Results;
