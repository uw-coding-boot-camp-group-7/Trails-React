import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li><a href="not/a/url">Passport</a></li>  
            </ul>        
            <ul>
                <li><a id="login" href="not/a/url">Log in</a></li>  
                <li><a id="signup" href="not/a/url" style={{color: "#f7a434"}}>Sign Up</a></li>  
            </ul>
        </nav>

    );
}

export default Navbar;
