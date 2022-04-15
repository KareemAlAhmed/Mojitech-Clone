import React from 'react';
import logo from '../assets/icons8-notes-50.png';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo' id='listLogo' />
            </div>
            <div className='title'>
                To Do List
            </div>
        </div>
    );
}

export default Header;;