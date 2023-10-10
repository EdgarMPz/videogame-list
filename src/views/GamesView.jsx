import React from "react";
import "./GamesView.css";

function GamesView({ game }) {
  return (
    <div className="GamesView">
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <img src={game.image} alt={game.name + " image"}></img>
    </div>
  );
}

export default GamesView;