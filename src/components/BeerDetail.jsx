import React from "react";

export default function BeerDetail({ beerDetails }) {
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
