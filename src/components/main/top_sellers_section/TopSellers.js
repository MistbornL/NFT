import React from 'react'

export const TopSellers = ({ item }) => {
    return (

        <div className='card-body-top'>
            <img src={item.userIcon} alt='icon' />
            <div className='body-top-left'>
                <span>
                    {item.title}
                </span>
                <p>
                    {item.user}
                </p>
            </div>
        </div>

    )
}
