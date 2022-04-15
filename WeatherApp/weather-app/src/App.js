import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Results from './Components/Results';
import InfoAndOptions from './Components/InfoAndOptions';

const api={
  key:"833dbcf1703baf0a56d0057fe8188b02",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query,setQuery]=useState("madrid");
  const [weather,setWeather] = useState({name:"madrid",main:{temp:0,humidity:65},weather:[{main:"Clouds"}],wind:{speed:8}  })
  const [load,setLoad]=useState(false)
{/* {(typeof weather ==undefined)? console.log(weather)} */}
console.log(query)

    function search (evt) {
      console.log(query)
      if(query !==""){
        if(evt.key ==="Enter" ||evt.type ==="click"){
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
              setWeather(result)
            }) 
      
        }
      }
    }
    if(weather.message ==="city not found" || weather.message === "Nothing to geocode"){
      alert("City not found")
      setWeather({name:"madrid",main:{temp:0,humidity:65},weather:[{main:65}],wind:{speed:8}  })
      setQuery("")
    }
  return (
    <div className="app">         
      <div className='container'>
        <Results weather={weather}/>
        <InfoAndOptions weather={weather} query={query} setQuery={setQuery} search={search}/>
        </div>

    </div>
  );
}

export default App;
