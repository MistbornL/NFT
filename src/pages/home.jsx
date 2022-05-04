import Header from "../components/header/header";
import "./index.css"


const Home = () => {
    return (
        <>
            <div className="wrap">
                <Header/>
                <div className="line"/>   
            </div>

            <div className='info'>
                <div className="box">
                    <h2>50K+</h2>
                    <h3>Artwork</h3>
                </div>

                <div className="box">
                    <h2>400K+</h2>
                    <h3>Auction</h3>
                </div>

                <div className="box">
                    <h2>20K+</h2>
                    <h3>Artists</h3>
                </div>

                <div className="box">
                    <h2>1M+</h2>
                    <h3>Sales</h3>
                </div>
            </div>
        </>
        

    )
}


export default Home;