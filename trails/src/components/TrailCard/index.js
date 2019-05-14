import React from "react";
import "./style.css";

const styles = {
  pic: {
    height: "auto",
    width: 200
  }
}

function TrailCard(props) {
  return (
    <div className="card" >
      <div className="img-container">
        <img style={styles.pic} alt={props.name} src={require("../../images/" + props.image)} />
      </div>
    </div>
  );
}

export default TrailCard;
