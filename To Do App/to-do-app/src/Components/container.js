import React, { useState } from 'react';
import AddingNote from './AddingNote';
import './container.css';
import Header from './Header';
import NotesStorage from './NotesStorage';


function Container() {

    const [note, setNote] = useState({
        text:"",
        id:0
    });
    const [list, setList] = useState([]);

    return (
        <div className='container'>
            <Header />
            <AddingNote note={note} setNote={setNote} list={list} setList={setList} />
            <NotesStorage note={note} setNote={setNote} list={list} setList={setList} />
        </div>
    );
}

export default Container;