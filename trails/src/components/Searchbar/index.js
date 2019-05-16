import React from "react";
import "./style.css";

function Searchbar() {
    return (
        <div className="searchbar">
            <div className="search">Search:  <input id="search" type="text" className="search-input"  autofocus="autofocus"></input> </div>
            
        </div>
    );
}

export default Searchbar;
