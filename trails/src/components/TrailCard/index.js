import React from "react";
import "./style.css";

const styles = {
  pic: {
    width: 300,
    height: "auto",
  }
}

function TrailCard(props) {
  return (
      <div className="trail-card center">
        <img className="trail-img"  alt={props.name} src={props.image} />
        <div className="overlay center">
        <div className="content">{props.name}<p className="sub-content">{props.location}</p></div>
        </div>
      </div>
  );
}

export default TrailCard;
