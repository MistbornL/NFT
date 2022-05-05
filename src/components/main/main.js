import React from 'react'
import "./index.css"
import statue from '../../ui/statue.png'
import heart from '../../ui/heart.png'
import Popular from './Popular/Popular'
import elipse from '../../ui/elipse.png'

function Main() {
    return (
        <div className="wrapper">
            <Popular />


            <section className='sec'>
                <div classname='photo'>
                    <img className='statue' src={statue} alt="statue"></img>
                    {/* <div classname="stat">
                        <img className='heart' src={heart} alt='heart'></img>
                        <p>97</p>
                    </div> */}
                </div>

                <div className='auf'>
                    <div style={{ alignItems: 'center' }}>
                        <img src={elipse} style={{ width: '45px', height: '45px' }}></img>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', }} className="">

                        <h1 style={{ margin: '0' }}>STATUE OF ART</h1>
                        <p>irakli N</p>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Main