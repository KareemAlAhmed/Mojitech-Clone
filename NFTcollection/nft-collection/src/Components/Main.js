import React, { useEffect, useState } from "react";
import img1 from '../punks/5.jpg'
import logo from '../assets/20.png'
import twitterLogo from '../assets/owner/twitter.png'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk,list}) => {
    const[activePunk,setActivePunk]=useState(list[0])
    console.log(activePunk)
    console.log(list[0])
    console.log(list.length)
    useEffect(()=>{
        setActivePunk(list[selectedPunk])
    },[list,selectedPunk])
  return (
      <div className="main">
          <div className="mainContent">
              <div className="punkHighlight">
                  <div className="punkContainer">
                      <img className="selectedPunk" src={activePunk.image_preview_url} />
                  </div>
              </div>
                <div className="punkFullDetails">
                <div className='punkDetails' style={ { coloe:" white"}}>
                  <div className="title">
                    {activePunk.name}
                  </div>
                  <span className="itemNumber">.#{activePunk.token_id}</span>
              </div>
              <div className="owner">
                  <div className="ownerImageContainer">
                    <img src={logo} />
                  </div>
                    <div className="ownerDetails">
                      <div className="ownerNameAndHandler">
                          <div>0xB79Ccda1Ec97a0e8109D0b2B63156f192Ad1d202</div>
                          <div className="ownerHandle">@KareemAhmed</div>
                      </div>
                      <div className="ownerAddress">
                            <div className="ownerLink">
                            <img src={instagramLogo} />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} />
                            </div>
                        </div>
                </div>
              
                        
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Main;
