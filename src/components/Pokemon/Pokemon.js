import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 my-5 Pokemon">
      <div className="card-Body pb-0">
        <h5 className="card-title mb-4">Pokemon name: {props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon!" : "not awesome"}
        </h6>
        <p className="mb-0">
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}
