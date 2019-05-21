import React, { Component } from "react";
import Nav from "../Nav";
import Searchbar from "../Searchbar";
import "./style.css";
import examples from "../../default.json"

const styles = {
    container: {
      height: "75vh",
      width: "100%",
      overflow: "hidden",
    }
}

function SlideHeader(props) {
    return (
        <div style={styles.container}>
            <div className="slide" id="slide">
                {props.children}
            </div>
        </div>
    );
}

export default SlideHeader;