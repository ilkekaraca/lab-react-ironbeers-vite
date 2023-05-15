import React, { useEffect, useState } from "react";
import BeerDetail from "../components/BeerDetail";

export default function RandomBeer() {
  const [beerDetails, setBeerDetails] = useState({});

  const fetchBeerDetails = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      if (response.status === 200) {
        const parsed = await response.json();
        setBeerDetails(parsed);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBeerDetails();
  }, []);

  return <BeerDetail beerDetails={beerDetails} />;
}
