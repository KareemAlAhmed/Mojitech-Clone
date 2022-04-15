import React,{createRef, useEffect, useState} from 'react';
import './Notes.css';
import trush from '../assets/garbage.png';

function Notes({id, note, setNote,list,setList }) {
    const trushLogo= createRef()
    const text=createRef()
    const noteDiv=createRef()
    const [finished,setFinished]=useState(false)

    const removingNote=()=>{
        const parentId=trushLogo.current.parentElement.parentElement.id;
        const newlist = list.filter((e)=>{
            return e.id != parentId
        })
        setList(newlist)
    }

    const finishedNote=()=>{
        const noteText =text;
        if(finished === false){
            setFinished(true)
            noteDiv.current.classList.add("finishedDiv")
           noteText.current.classList.add("finished")
        }else{
            setFinished(false)
            noteText.current.classList.remove("finished")
            noteDiv.current.classList.remove("finishedDiv")
        }
        
    }

    return (
        <div className='Note' id={id} ref={noteDiv}>
            <div className='noteText'>
                <input type="checkbox"  onClick={finishedNote}/>
                <p ref={text}>{note}</p>
            </div>
            <div className='noteOptions'>
                <img id='trush' ref={trushLogo} src={trush} alt='logo' onClick={removingNote}/>
            </div>
        </div>
    );
}

export default Notes;