import React from "react";
import CollectionCard from "./CollectionCard";
import './PunkList.css'

const PunkList = ({punkListData,setSelectedPunk}) => {
  return (
      
    <div className="PunkList">
        {
        punkListData.map(ele =>(
          <div onClick={()=>{
            setSelectedPunk(ele.token_id)
            console.log(ele)
          }}>
             <CollectionCard 
              key={ele.token_id}
              id={ele.token_id}
              name={ele.name}
              traits={ele.traits}           
              image={ele.image_preview_url}
              />
          </div>
       ))
   }
</div>
  );
};

export default PunkList;
