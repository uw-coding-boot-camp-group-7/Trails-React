import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li><a href="/">Home</a></li>  
            </ul>        
            <ul>
                <li><a id="login" href="/info">Trail info</a></li>  
                <li><a id="login" href="/passport">Passport</a></li>  
                <li><a id="signup" href="/login" style={{color: "#f7a434"}}>Log in</a></li>  
            </ul>
        </nav>

    );
}

export default Navbar;
