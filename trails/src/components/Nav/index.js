import React from "react";
import "./style.css";

function Navbar(props) {

    // <li><a href="/info">Trail info</a></li>  
    // <li><a href="/passport">Passport</a></li>  
    // <li><a href="/login">Log in</a></li>  
    // <li><a href="/signup">Sign up</a></li>  
    
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li><a href="/">Trails</a></li>  
            </ul>        
            <ul>
                {props.children}
            </ul>
        </nav>

    );
}

export default Navbar;
