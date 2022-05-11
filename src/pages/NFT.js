import React, { useState, useEffect } from 'react'
import NFT_CARDS from '../dummyData/data';
import { useParams } from "react-router-dom";
import Header from '../components/header/header';
import '../components/header/index.css'

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
            <Header />
        </div>

    )
}
