import { Menu } from "../components/header/Menu";
import "../components/header/index.css";
import "../styles/pages/explore.css";

const Explore = () => {
  return (
    <div className="wrap">
      <div className="container">
        <Menu />
        <div className="line" />
      </div>
      <div className="new-beggining">
        <h1>Explore connections</h1>
      </div>
      <div className="explore-menu"></div>
    </div>
  );
};

export default Explore;
