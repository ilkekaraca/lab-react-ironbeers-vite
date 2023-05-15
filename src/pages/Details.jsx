import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div className="beer-detail">
      <img width="50px" src={beerDetails.image_url} alt="beer image" />
      <div className="beer-detail-info beer-detail-1">
        <h2>{beerDetails.name}</h2>
        <span>{beerDetails.attenuation_level}</span>
      </div>

      <div className="beer-detail-info beer-detail-2">
        <p>{beerDetails.tagline}</p>
        <span>{beerDetails.first_brewed}</span>
      </div>

      <p>
        <strong>{beerDetails.description}</strong>
      </p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  );
}
