import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

function Card({title, year, developer, publisher}) {
  return (
    <div className="Card">
      <Link to={title}><h2>{title}</h2></Link>
      <p>{year}</p>
      <p>{developer}</p>
      <p>{publisher}</p>
    </div>
  );
}

export default Card;