import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BeerCard from "../components/BeerCard";

export default function Beers() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      if (response.status === 200) {
        const parsed = await response.json();
        setBeers(parsed);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <Header />
      {beers.map((beer) => {
        return <BeerCard beer={beer} />;
      })}
    </div>
  );
}
