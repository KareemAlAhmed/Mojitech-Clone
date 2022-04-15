import React, { useEffect, useRef, useState } from 'react';
import './DisplayScreen.css';

function DisplayScreen({ value, setValue, oldNumber, setOldNumber }) {
  const inpRef = useRef();
  useEffect((k, oldNumber) => {
    inpRef.current.focus();


  }, []);

  const checking = (k, oldNumber) => {
    const truth = isNaN(k);

    return truth ? null : setValue(k);
  };

  const what = (key) => {
    console.log(key);
  };


  return (
    <div className='displayScreen'>
      <input type="text" value={value} onChange={(e) => {

        return checking(e.target.value, oldNumber);
      }} onKeyPress={(evt) => what(evt)}
        className='input' ref={inpRef} />
    </div>);
}

export default DisplayScreen;
