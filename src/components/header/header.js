import React from 'react'
import Logo from '../logo'
import Search from '../search'
import "./index.css"
import Nav from '../navigation/nav'


const Header = () => {
  return (
    <header style={{width: '100%', display: 'flex', alignItems: 'center'}}>
       
        <div className="container">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Logo />
                <Search /> 
            </div>
            <Nav/>
            <div className="btn">
                <button type="submit" value="Submit">Connect Wallet</button>
            </div>
        </div>
    </header>
  )
}

export default Header