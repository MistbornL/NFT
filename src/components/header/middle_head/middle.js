import React from 'react'
import moonstatue from '../../../ui/moonstatue.png'

function Middle() {
    return (
        <div className="middle_head">
            <div className="artworks">
                <h1>Collect Super Rare Digital <span>ARTWORKS</span></h1>
                <p>Buy and sell NFTs from the world’s top artists.</p>

                <div className="header_buttons" style={{ display: "flex" }}>
                    <button className='start' type="button">Get Started</button>
                    <div style={{ width: '20px' }}></div>
                    <button className='create' type="button">Create</button>
                </div>

            </div>

            <div className="moon-statue">
                <img src={moonstatue} alt="statue" />
            </div>
        </div>
    )
}

export default Middle