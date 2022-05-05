import React from 'react'
import "./index.css"
import statue from '../../ui/statue.png'
import heart from '../../ui/heart.png'

function Main() {
    return (
        <div className="wrapper">
            <div className="popular">
                <h1>Most <span>Popular</span></h1>
                <button className='view_all'>
                    View All
                </button>
            </div>


            <section>
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