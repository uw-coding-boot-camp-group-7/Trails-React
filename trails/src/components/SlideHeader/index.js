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

var images = examples[0].image;
var i = Math.floor(Math.random() * images.length); // Random start point
var time = 3000;	// Time Between Switch

function SlideHeader(props) {

    // // Change Image
    // function changeImg(){

    //     // set src of slide to be an image from the array
    //     // document.slide.src = images[i];

    //     // Check If Index Is Under Max
    //     if(i < images.length - 1){
    //         // Add 1 to Index
    //         i++; 
    //     } else { 
    //         // Reset Back To O
    //         i = 0;
    //     }

    //     // Run function every x seconds
    //     setTimeout(changeImg(), time);

    // }

    // // Run function when page loads
    // window.onload=changeImg();

    // console.log(images)

    return (
        <div style={styles.container}>
            <div className="slide" id="slide" >
                {props.children}
            </div>
        </div>
    );
}

export default SlideHeader;

// style={{backgroundImage: `url('../../images/fuji.png')`}}