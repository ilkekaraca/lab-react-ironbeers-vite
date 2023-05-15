import { Link } from "react-router-dom";
import HomepageCard from "../components/HomepageCard";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="allLinks">
      <HomepageCard img={beers} title="All Beers" link="/beers" />
      <HomepageCard img={newBeer} title="New Beer" link="/new-beer" />
      <HomepageCard img={randomBeer} title="Random Beer" link="/random-beer" />
    </div>
  );
};

export default HomePage;
