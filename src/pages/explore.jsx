import { NavLink } from "react-router-dom";
import "./index.css"


const Explore = () => {
    return (
        <div className="wrap">
            <NavLink to="/explore">
                <p>Explore</p>
            </NavLink>
        </div>
    )
}

export default Explore;