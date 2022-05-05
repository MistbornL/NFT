import React from 'react'
import "./index.css"
import statue from '../../ui/statue.png'
import heart from '../../ui/heart.png'
import Popular from './Popular/Popular'

function Main() {
    return (
        <div className="wrapper">
            <Popular />


            <section className='sec'>
                <div classname='photo'>
                    <img className='statue' src={statue} alt="statue"></img>
                    <div classname="stat">
                        <img className='heart' src={heart} alt='heart'></img>
                        <p>97</p>
                    </div>
                </div>

                <div className='auf'>
                    <div className="charcho" style={{ width: '45px', height: '45px', }}>
                        <img></img>
                    </div>
                    <div style={{ width: '119px', height: '24px' }}>
                        <p>STATUE OF ART</p>
                        <p>irakli N</p>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Main