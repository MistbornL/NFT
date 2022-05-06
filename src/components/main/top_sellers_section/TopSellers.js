import React from 'react'
import './index.css'
export const TopSellers = ({ item }) => {
    return (

        <div className='section-top'>
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                    <li>
                        <img src={item.userIcon} alt='icon' />
                        <div className='section-top-left'>
                            <span>
                                {item.title}
                            </span>
                            <p>
                                {item.user}
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="bottom-line"></div>
            </div>

        </div>

    )
}
