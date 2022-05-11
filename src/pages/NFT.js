import React, { useState, useEffect } from 'react'
import NFT_CARDS from '../dummyData/data';
import { useParams } from "react-router-dom";
import '../components/header/index.css'
import { Menu } from '../components/header/Menu';

export const NFT = () => {
    const params = useParams();
    console.log(params)

    const [singleCard, setSingleCard] = useState();

    useEffect(() => {
        let x = NFT_CARDS.filter(c => c.id == params.id)[0];
        setSingleCard(x)
    }, [])


    console.log(singleCard)

    return (
        <div className="wrap">
            <Menu />
            <div className='line' />

            <div style={{ display: 'flex', width: '448px', height: '445px', marginTop: '79px' }}>
                <img style={{ width: '100%' }} src={singleCard.coverImg}></img>
            </div>

            <div className='description'>
                <h1>Description</h1>
                <div className="line-for-div"></div>
                <div className='scroll'>
                    <p>We can predict in advance the main argument of the critics - a housewife cannot be considered a real professional in each of the listed areas! But we do not argue with this, because the activities of a housewife include the skills of almost all of the listed professions. But that's not all - a housewife is a mother who tries her best to raise future worthy members of society, and does it on her own, without resorting to the help of surrogate mothers, whose services cost from 25 thousand dollars. Who, if not the state itself, should devote more time to them, protect their rights and, in the end, start playing for their hard work?! We urge you to respect and appreciate</p>
                </div>

            </div>

            <div className='description'>
                <h1>Properties</h1>
                <div className="line-for-div"></div>
                <div className='div-wrapper'>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>

                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>

                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>

                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className='small-div'>
                        <p></p>
                        <h1></h1>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>

    )
}
