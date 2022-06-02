import { NavLink } from "react-router-dom";
import "./index.scss";

const Activity = () => {
  return (
    <div className="wrap">
      <NavLink to="/activity">
        <p>activity</p>
      </NavLink>
    </div>
  );
};

export default Activity;
