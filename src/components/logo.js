import { Link } from "react-router-dom";
import logo from "../ui/logo.svg"

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <div><img src={logo} alt='Logo' /></div>
            </Link>
        </div>
    )
}

export default Logo;