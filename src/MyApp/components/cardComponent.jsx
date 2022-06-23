import React from "react";

import "./styles.scss";

function CardComponent({ cardInfo }) {
  return (
    <div className="card">
      <div className="cardImageBox">
        <img src={cardInfo.cardImgURL} alt={cardInfo.cardImgName} />
      </div>
      <div className="card-body">
        <a href=".">
          <h3>{cardInfo.cardHeader}</h3>
        </a>
        <p>{cardInfo.cardText}</p>
      </div>
    </div>
  );
}

export default CardComponent;
