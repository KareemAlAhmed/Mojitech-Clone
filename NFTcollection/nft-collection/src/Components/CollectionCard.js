import React from "react";
import '../Components/CollectionCard.css'
import eith from '../assets/weth.png'


function CollectionCard({id,name,traits,image}) {

  return (
  <div className="CollectionCard">
      <div className="PunkImage">
         <img src={image} /> 
      </div>
      <div className="PunkDetails">
          <div className="name">{name} <span className="number"></span></div>
          <div className="id">{`.#${id}`}</div>
        <div className="priceContainer">
            <div className="eithlogo">
                <img src ={eith} className="wethImage"/>
            </div>
            <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
  </div>
  )
};

export default CollectionCard;
// nft-collection\src\assets\eth.png