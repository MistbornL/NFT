import React from 'react';
import './nftCard.css'

import UserIcon from '../../../ui/elipse.png';

const NtfCard = ({ img, user, title, author, eth, wiladi }) => {
    return (
        <div className='card-wrapper'>
            <div className='card-cover'>
                <img src={img} alt='img' />
            </div>
            <div className='card-body'>
                <div className='card-body-top'>
                    <img src={UserIcon} alt='icon' />
                    <div className='body-top-left'>
                        <span>
                            {title}
                        </span>
                        <p>
                            {author}
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
                            <img src={user} alt='icon' />
                            {eth}
                        </span>
                        <span>{wiladi}</span>

                    </div>

                </div>
                <button >Buy Now</button>


            </div>

        </div>
    )
}

export default NtfCard