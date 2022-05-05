import React from 'react'
import Logo from '../logo'
import Search from '../search'
import "./index.css"
import Nav from '../navigation/nav'
import Middle from './middle_head/middle'

const Header = () => {
    return (
        <header style={{ width: '100%', height: '739px' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Logo />
                    <Search />
                </div>

                <div className="futa">
                    <Nav />
                    <div className="btn">
                        <button type="submit" value="Submit">Connect Wallet</button>
                    </div>

                </div>
            </div>
            <Middle />
        </header>
    )
}

export default Header