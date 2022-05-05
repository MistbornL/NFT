import React from 'react';
import './nftCard.css'
import Statue from '../../../ui/statue.png';
import UserIcon from '../../../ui/elipse.png';
import nft from '../../../ui/nft.png';
const NtfCard = () => {
    return (
        <div className='card-wrapper'>
            <div className='card-cover'>
                <img src={Statue} alt='img' />
            </div>
            <div className='card-body'>
                <div className='card-body-top'>
                    <img src={UserIcon} alt='icon' />
                    <div className='body-top-left'>
                        <span>
                            STATUE OF ART
                        </span>
                        <p>
                            irakli N
                        </p>
                    </div>
                    <div className='body-top-right'>

                    </div>
                </div>
                <div className='card-body-mid'>
                    <div className='body-mid-top'>
                        <span>Current Price</span>
                        <span>Available</span>
                    </div>
                    <div className='body-mid-bottom'>
                        <span>
                            <img src={nft} alt='icon' />
                            0.5656565 ETH
                        </span>
                        <span>7/10</span>

                    </div>

                </div>
                <button >Buy Now</button>


            </div>

        </div>
    )
}

export default NtfCard