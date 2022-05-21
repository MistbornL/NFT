import { Menu } from "../components/header/Menu";
import "../components/header/index.css";
import "../styles/pages/explore.css";
import ExploreData from "../dummyData/explore_data";
import NtfCard from "../components/main/nftCard/NtfCard";
import "../components/main/nftCard/nftCard.css";
import { Footer } from "../components/footer/Footer";

const Explore = () => {
  return (
    <fragment>
      <div className="wrap">
        <header>
          <div className="container">
            <Menu />
            <div className="line" />
          </div>
        </header>

        <div className="new-beggining">
          <h1>Explore connections</h1>
        </div>

        <main>
          <nav className="explore-menu">
            <ul>
              <li>Trending</li>
              <li>Top</li>
              <li>Art</li>
              <li>Celebrities</li>
              <li>Photography</li>
              <li>Music</li>
              <li>Sport</li>
              <li>Trading Cards</li>
              <li>Utility</li>
              <li>Virtual Worlds</li>
            </ul>
          </nav>
          <section
            style={{
              display: "grid",
              marginBottom: "70px",
              gridTemplateColumns: "repeat(4, 1fr)",
              justifyItems: "center",
            }}
          >
            {ExploreData.map((item) => (
              <NtfCard item={item} key={item.id} />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </fragment>
  );
};

export default Explore;
