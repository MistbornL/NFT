import React from 'react'
import "./index.css"
import statue from '../../ui/statue.png'
import heart from '../../ui/heart.png'
import Popular from './Popular/Popular'
import nft from '../../ui/nft.png'

import Logontxt from './logontxt/Logontxt'
import { Priceavailable } from './priceavailable/Priceavailable'
import NtfCard from './nftCard/NtfCard'

function Main() {
    const style = {
        width: "94px",
        height: "21px",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '30px',
        /* identical to box height */


        color: '#8884B3'
    }


    return (
        <div className="wrapper">
            <Popular />
            <NtfCard />


        </div>
    )
}

export default Main