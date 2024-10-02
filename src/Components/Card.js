// Card.js
import React from "react";
import "./Card.css"; // Optional: If you want to add specific styles for the card

function Card({ flags, searchChnage, fltDat, searchFlag }) {
  return (
    <div className="card-container">
      <input
        type="text"
        onChange={searchChnage}
        placeholder="Search for Countries"
        // className="search-field"
      />
      {(fltDat == " " ? flags : searchFlag).map((flag, index) => (
        <div className="card" key={index}>
          <img src={flag.flag} alt={flag.name} className="flag-image" />
          <div className="flag-name">{flag.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
