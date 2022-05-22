import { Footer } from "../components/footer/Footer";
import Header from "../components/header/header";
import Info from "../components/header/info";
import Main from "../components/main/main";
import "../components/header/index.css";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="wrap">
        <Header />
        <div className="line" />
      </div>

      <Info />
      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
