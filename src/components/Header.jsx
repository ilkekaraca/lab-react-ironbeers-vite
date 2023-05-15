import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={"/"}>
      <div className="header">
        <FontAwesomeIcon icon={faHouse} />
      </div>
    </Link>
  );
}
