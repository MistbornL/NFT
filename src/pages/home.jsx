import Header from "../components/header/header";
import Info from "../components/header/info";
import Main from "../components/main/main";
import "./index.css"



const Home = () => {
    return (
        <>
            <div className="wrap">
                <Header />
                <div className="line" />
            </div>
            <Info />
            <Main />
        </>


    )
}


export default Home;