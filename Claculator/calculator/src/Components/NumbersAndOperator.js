import React, { useEffect, useState } from 'react';
import './NumbersAndOperator.css';

function NumbersAndOperator({ value, setValue, oldNumber, setOldNumber }) {

  const [operator, setOperator] = useState("");
  const [finished, setFinished] = useState(false);


  function result(oldNumber, operator, value) {
    let newNumber = +value;
    switch (operator) {
      case "÷":
        setFinished(true);
        return setValue(oldNumber / newNumber);
      case "+":
        setFinished(true);
        return setValue(oldNumber + newNumber);
      case "-":
        setFinished(true);
        return setValue(oldNumber - newNumber);
      case "×":
        setFinished(true);
        return setValue(oldNumber * newNumber);
      default: return value;

    }
  };
  useEffect(() => {
    setValue(+value);
  }, [value, operator, finished]);

  const earsing = (value) => {
    const new1 = Array.from(value.toString());
    const new2 = [];
    const rang = new1.length - 1;
    for (let i = 0; i < rang; i++) {
      if (new1[i] === "/") {
        continue;
      } else {
        new2.push(new1[i]);
      }
    }
    const new3 = new2.join("");
    console.log(new3);
    setValue(+new3);
  };
  return (
    <div className='NumbersAndOperator'>
      <button onClick={(e) => { setValue(0); setOldNumber(0); }} className='btn clear'>Clear</button>
      <button onClick={(e) => { setValue(0); earsing(value); }} className='btn c'>C</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : setValue(0); setOperator(e.target.value); }); setOldNumber(value); }} value="÷" className='btn division'>÷</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(7) : finished ? setValue(7) : setValue(prevState + "7"); setFinished(false); }); }} className='btn seven'>7</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(8) : finished ? setValue(8) : setValue(prevState + "8"); setFinished(false); }); }} className='btn eight'>8</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(9) : finished ? setValue(9) : setValue(prevState + "9"); setFinished(false); }); }} className='btn nine'>9</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : setValue(0); setOperator(e.target.value); }); setOldNumber(value); }} value="×" className='btn x'>×</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(4) : finished ? setValue(4) : setValue(prevState + "4"); setFinished(false); }); }} className='btn four'>4</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(5) : finished ? setValue(5) : setValue(prevState + "5"); setFinished(false); }); }} className='btn five'>5</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(6) : finished ? setValue(6) : setValue(prevState + "6"); setFinished(false); }); }} className='btn sex'>6</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : setValue(0); setOperator(e.target.value); }); setOldNumber(value); }} value="-" className='btn minus'>-</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(1) : finished ? setValue(1) : setValue(prevState + "1"); setFinished(false); }); }} className='btn one'>1</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(2) : finished ? setValue(2) : setValue(prevState + "2"); setFinished(false); }); }} className='btn two'>2</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(3) : finished ? setValue(3) : setValue(prevState + "3"); setFinished(false); }); }} className='btn three'>3</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : setValue(0); setOperator(e.target.value); }); setOldNumber(value); }} value="+" className='btn adding'>+</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : finished ? setValue(0) : setValue(prevState + "0"); setFinished(false); }); }} className='btn zero'>0</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : finished ? setValue(0) : setValue(prevState + "."); setFinished(false); }); }} className='btn dot'>.</button>
      <button onClick={(e) => { setValue(prevState => { prevState === 0 ? setValue(0) : operator != "" ? result(oldNumber, operator, value) : setValue(0); }); }} className='btn equal'>=</button>
    </div>);
}

export default NumbersAndOperator;
