import React, { useState, useEffect, createRef } from 'react';
import './AddingNote.css';



function AddingNote({ note, setNote, list, setList }) {
    const{text,id}=note
    const [fakeId, setFakeid] = useState(0);
    const inp = createRef()

    useEffect(()=>{
        setNote({...note, id : fakeId})
    },[fakeId])

    const changeHandler=()=>{
        setFakeid(prevState => prevState + 1)
        setList([...list,note])
        setNote({...note,text:""})
    }
  

    return (
        <div className='AddingNote'>
            <div className='noteWritting'>
                <label>Note :</label>
                <input className='inp' type='text' value={text} onChange={(e) => setNote({
                    ...note,
                    text: e.target.value
                })} placeholder="Enter Your Note" ref={inp}></input>
            </div>
            <div className='noteSaving'>
                <button className='btn' onClick={(e)=> inp.current.value != "" ?changeHandler(e): e.preventDefault}>Save Task</button>
            </div>
        </div>
    );
}

export default AddingNote;