import { Footer } from "../components/footer/Footer";
import Header from "../components/header/header";
import Info from "../components/header/info";
import Middle from "../components/header/middle_head/middle";
import Main from "../components/main/main";
import '../components/header/index.css';


import "./index.css";

const Home = () => {
  return (
    <>
      <div className="wrap">
        <Header />
        {/* <Middle /> */}
        <div className="line" />
      </div>
      <Info />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
