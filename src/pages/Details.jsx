import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";

export default function Details() {
  const { id } = useParams();
  const [beerDetails, setBeerDetails] = useState({});

  const fetchBeerDetails = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
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
  }, [id]);

  return <BeerDetail beerDetails={beerDetails} />;
}
