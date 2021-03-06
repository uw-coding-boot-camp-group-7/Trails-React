import React from "react";
import Nav from "../Nav";
import Searchbar from "../Searchbar";
import "./style.css";

const styles = {
    container: {
      height: "75vh",
      width: "100%",
      overflow: "hidden"
    }
}

function Parallax() {
    return (
        <div style={styles.container}>
            {document.onscroll = function() {
                const scrollPos = window.pageYOffset;
                const dynamic = 100 + scrollPos + '%';
                document.querySelector(".hero-back").style
                .backgroundSize = dynamic;     
            }}

            <div className="hero-back">
                <img id="front" alt="hero-front" src={require("../../images/hero-front.png")} />    
                <Nav>
                    <li><a href="/">Back to Search</a></li>  
                </Nav>
                {/* <div className="title center"></div>/ */}
            </div>
        </div>
    );
}

export default Parallax;
