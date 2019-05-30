import React from "react";
import "./style.css";

function Searchbar(props) {
    return (
        <div className="searchbar">
            <div className="search">Search:  
                <input {...props} id="search" type="text" className="search-input"  autoFocus="autofocus"></input> 
            </div>
            
        </div>
    );
}

export default Searchbar;
