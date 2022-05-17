import { NavLink } from "react-router-dom";
import { Menu } from "../components/header/Menu";
import "../components/header/index.css";

const Explore = () => {
  return (
    <div className="wrap">
      <div className="container">
        <Menu />
        <div className="line" />
      </div>
    </div>
  );
};

export default Explore;
