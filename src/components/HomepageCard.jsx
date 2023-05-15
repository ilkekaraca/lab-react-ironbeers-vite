import React from "react";
import { Link } from "react-router-dom";

export default function HomepageCard({ img, title, link }) {
  return (
    <Link to={link}>
      <div className="homepage-card">
        <img width="100%" src={img} alt="image" />
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          molestias, ipsa beatae atque minima iste magnam, id pariatur veniam
          quo ducimus impedit excepturi repellat illum corporis adipisci non
          sunt! Repellat.
        </p>
      </div>
    </Link>
  );
}
