import React from 'react';
import Notes from './Notes';
import './NotesStorage.css'

function NotesStorage({ note, setNote, list, setList }) {
    const{text,id}=note
    return (
        <div className='NotesStorage'>
            {
                
                list.map((ele=>{
                 return   <Notes  id={ele.id} note={ele.text} list={list} setList={setList}/>
                }))
            }
        </div>
    );
}

export default NotesStorage;