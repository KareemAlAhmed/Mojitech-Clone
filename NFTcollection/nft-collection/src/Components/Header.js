import React from 'react'
import punkLogo from'../assets/header/cryptopunk-logo.png'
import '../Components/Header.css'
import searchLogo from'../assets/header/search.png'
import darkmode from'../assets/header/theme-switch.png'
function Header() {
    return (
        <div className='header'>
            <div className='punkLogoContainer'>
              <img src={punkLogo} className="punkLogo"/> 
            </div> 

            <div className='searchbar'>
                <div className='searchLogoContainer'>
                    <img src={searchLogo} />
                </div>
                <input className="searchInput" placeholder='Collection, item or user.' /> 
            </div>

            <div className='heaerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
             <div className='headerAction'>
                <div className='switchThemeButton'>
                    <img src={darkmode} />
                </div>    
            </div>
            <div className='login'>GET IN </div>

        </div>
    )
}

export default Header
