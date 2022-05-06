import React from 'react';
import './nftCard.css'
import heart from '../../../ui/heart.svg'
import { useState } from 'react';
import UserIcon from '../../../ui/elipse.png';

const NtfCard = ({ img, user, title, author, eth, wiladi }) => {
    var number = 0
    const [like, setLike] = useState(number)
    const [color, setColor] = useState({ color: 'white' })

    const onClick = () => {
        setColor({ color: '#ff4646' });
        if (color == '#ff4646') {
            setLike(number += 1)
        }
        else {
            setLike(number -= 1)
        }
        console.log(like)
    }
    return (
        <div className='card-wrapper'>
            <div className='card-cover'>
                <img src={img} alt='img' />
                <div style={{ gap: '10px', display: 'flex', position: 'absolute', marginTop: '-35px', marginLeft: '204px', alignItems: 'center' }}>
                    <img onClick={onClick} style={{ height: '100%', color: { color } }} src={heart}></img>
                    <span style={{ color: 'white', width: '15px', height: '18px', fontFamily: 'Poppins' }}>97</span>
                </div>
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