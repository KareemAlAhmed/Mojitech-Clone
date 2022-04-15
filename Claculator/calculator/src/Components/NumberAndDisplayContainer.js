import React, { useState } from 'react';
import './NumberAndDisplayContainer.css';
import DisplayScreen from './DisplayScreen';
import NumbersAndOperator from './NumbersAndOperator';

function NumberAndDisplayContainer() {
  const [value, setValue] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  return (
    <div className='NumberAndDisplayContainer'>
      <DisplayScreen value={value} setValue={setValue} oldNumber={oldNumber} setOldNumber={(setOldNumber)} />
      <NumbersAndOperator value={value} setValue={setValue} oldNumber={oldNumber} setOldNumber={(setOldNumber)} />
    </div>);
}

export default NumberAndDisplayContainer;
