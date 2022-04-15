import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

import Weather from './components/Weather';

function App() {
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);

  // useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });
  
  //     console.log("Latitude is:", lat)
  //     console.log("Longitude is:", long)
  //   }, [lat, long]);
  return (
    <div className="App">
      <h1>HI</h1>
      <Weather></Weather>
    </div>
  );
}

export default App;
