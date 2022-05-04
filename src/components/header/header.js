import React from 'react'
import Logo from '../logo'
import Search from '../search'
import "./index.css"
import Nav from '../navigation/nav'
import moonstatue from '../../ui/moonstatue.png'

const Header = () => {
  return (
    <header style={{width: '100%',  height: '739px'}}>
       
        <div className="container">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Logo />
                <Search /> 
            </div>

            <div className = "futa">
                <Nav/>
                <div className="btn">
                    <button type="submit" value="Submit">Connect Wallet</button>
                </div>
            </div>
        </div>

        <div className="middle_head">
            <div className="artworks">
                <p>Collect Super Rare Digital <span>Artworks</span></p>
            </div>

            <div className="moon-statue">
                <img src={moonstatue} alt="statue"/> 
            </div>
            
        </div>
        
    </header>
  )
}

export default Header