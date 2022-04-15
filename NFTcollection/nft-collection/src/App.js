import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js'
import CollectionCard from './Components/CollectionCard';
import PunkList from './Components/PunkList';
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import img1 from './punks/1.jpg'
import img2 from './punks/2.jpg'
import img3 from './punks/3.jpg'
import img4 from './punks/4.jpg'
import img5 from './punks/5.jpg'
import img6 from './punks/6.jpg'
import Main from './Components/Main';


function App() {

const [punkListData,setPunkListData]=useState([])
const [selectedPunk,setSelectedPunk]=useState(0)
console.log(punkListData.length)
useEffect(()=>{
  const getMyNfts = async () =>{
    const openseaData=await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0xB79Ccda1Ec97a0e8109D0b2B63156f192Ad1d202&order_direction=asc')
      
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
},[])


  return (
    <div className="container">
      <Header/>
      {
        punkListData.length > 0 &&(
          <>
          <Main selectedPunk={selectedPunk} list={punkListData}></Main>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}></PunkList>
        </>
        )
      }
      
    </div>
  );
}

export default App;
