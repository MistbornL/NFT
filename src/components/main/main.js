import React from 'react'
import "./index.css"
import Popular from './Popular/Popular'

import NtfCard from './nftCard/NtfCard'
import NFT_CARDS from '../../dummyData/data'


function Main() {
    return (
        <div className="wrapper">
            <Popular />
            <section >
                {
                    NFT_CARDS.map(item => (
                        <NtfCard item={item} key={item.id} />
                    ))
                }
            </section>

            <div className='sellers'>
                <h1>Top <span>Sellers</span></h1>
            </div>

        </div>
    )
}

export default Main