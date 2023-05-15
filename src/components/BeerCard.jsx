import React from "react";
import { Link } from "react-router-dom";

export default function BeerCard({ beer }) {
  return (
    <Link to={`/beers/${beer._id}`}>
      <div className="beer-card">
        <img width="30px" src={beer.image_url} alt="beer image " />
        <div className="beer-info">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </Link>
  );
}
