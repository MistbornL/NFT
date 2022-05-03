import { NavLink } from "react-router-dom";
import "./index.css"


const Home = () => {
    return (
        <div className="wrap">
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
        </div>
    )
}


export default Home;