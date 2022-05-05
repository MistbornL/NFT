import React from 'react'
import "./index.css"
import statue from '../../ui/statue.png'
import heart from '../../ui/heart.png'
import Popular from './Popular/Popular'
import nft from '../../ui/nft.png'
import Statue from '../../ui/statue.png';
import rec from '../../ui/Rectangle 26.png';
import rect from '../../ui/Rectangle 32.png';
import mascot from '../../ui/Rectangle 35.png'
import NtfCard from './nftCard/NtfCard'


function Main() {
    return (
        <div className="wrapper">
            <Popular />
            <section >
                <NtfCard title='Statue OF ART' author='irakli N' eth='0.56236 ETH' wiladi='7/10' img={Statue} user={nft} />
                <NtfCard title='Statue OF ART' author='irakli N' eth='1.54 ETH' wiladi='9/10' img={rec} user={nft} />
                <NtfCard title='Colangle' author='irakli N' eth='75 ETH' wiladi='9/10' img={rect} user={nft} />
                <NtfCard title='Virus K495' author='irakli N' eth='17.56 ETH' wiladi='7/10' img={mascot} user={nft} />
            </section>

        </div>
    )
}

export default Main