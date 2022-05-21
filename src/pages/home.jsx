import { Footer } from "../components/footer/Footer";
import Header from "../components/header/header";
import Info from "../components/header/info";
import Main from "../components/main/main";
import "../components/header/index.css";
import "./index.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.name);
  const dispatch = useDispatch;
  const increment = () => {
    dispatch({ type: "inc" });
  };
  console.log(counter);
  return (
    <>
      <div className="wrap">
        {/* <button onClick={increment}>increment</button> */}
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
