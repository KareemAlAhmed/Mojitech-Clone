import React, { useEffect ,useRef} from 'react';
import './InfoAndOptions.css'
import searchBtn from '../assets/search.png'
 
function InfoAndOptions({query,setQuery,search,weather}) {
    const refInput = useRef()
    const liRef1= useRef()
    const liRef2= useRef()
    const liRef3= useRef()
    const liRef4= useRef()


    function queryChangerBtn(){
        return setQuery(refInput.current.value)
    }

  return (
    <div className='infoAndOptions'>
        <div className='searchingBar'>
            <div className='searchInput'>
                <input type="text" 
                    placeholder='Another location' 
                    className='input'
                    value={query}
                    onChange={(e)=>{setQuery(e.target.value)}}
                    onKeyPress={search}
                    ref={refInput} />
                    
            </div>
            <div className='searchButton' onClick={(e)=>{
                queryChangerBtn()
                search(e)}
                    }>
                <img src={searchBtn} className='searchBtn' onClick={(e)=>{
                    search(e)
                    queryChangerBtn()}
                    }/>
            </div>
        </div>
        <div className='otherLocation'>
            <ul className='list'>
                <li onClick={(e)=>{ 
                    setQuery(liRef1.current.textContent)                
                    search(e)}
                } 
                    ref={liRef1}>Birmingham</li>

                <li onClick={(e)=>{ 
                    setQuery(liRef2.current.textContent)
                    search(e)}}  
                ref={liRef2}>Manchester</li>

                <li onClick={(e)=>{ 
                    setQuery(liRef3.current.textContent)
                    search(e)}}  
                ref={liRef3}>New York</li>

                <li onClick={(e)=>{ 
                    setQuery(liRef4.current.textContent)
                    search(e)}} 
                ref={liRef4}>California</li>
            </ul>
        </div>
        <div className='weatherDetails'>
            <div className='weatherTitle'>Weather Details</div>
            <div className='weatherOptions'>
                <div className='weatherOption'>
                    <div className='name'>Cloudy</div>
                    <div className='value'>86%</div>
                </div>
                <div className='weatherOption'>
                    <div className='name'>Humidity</div>
                    <div className='value'>{weather.main.humidity}%</div>
                </div>
                <div className='weatherOption'>
                    <div className='name'>wind</div>
                    <div className='value'>{weather.wind.speed}km/h</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default InfoAndOptions;
