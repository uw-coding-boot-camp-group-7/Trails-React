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

class StillHeader extends Component {

    render() {
        return (
            <div style={styles.container}>
                <div className="still">
                    <Nav />
                </div>
            </div>
        );
    }
}

export default StillHeader;