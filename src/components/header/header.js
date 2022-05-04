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
                <h1>Collect Super Rare Digital <span>ARTWORKS</span></h1>
                <p>Buy and sell NFTs from the world’s top artists.</p>

                <div className = "header_buttons" style = {{display: "flex"}}>
                    <button className='start' type="button">Get Started</button>
                    <div style={{width: '20px'}}></div>
                    <button className='create' type="button">Create</button>
                </div>
                
            </div>

            <div className="moon-statue">
                <img src={moonstatue} alt="statue"/> 
            </div>
        </div>
        
    </header>
  )
}

export default Header