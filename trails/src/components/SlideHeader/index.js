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

class SlideHeader extends Component {

    // state = {
    //     example,
    // }
    
    // // Run function when page loads
    // componentDidMount() {
    //     this.changeImg();
    // }
    
    // // Change Image
    // changeImg = () => {
        
    //     let images = [];
        
    //     images[0] = "http://lorempixel.com/400/200/animals";
    //     images[1] = "http://lorempixel.com/400/200/sports";
    //     images[2] = "http://lorempixel.com/400/200/food";
    //     images[3] = "http://lorempixel.com/400/200/people";
        
    //     // let i = Math.floor(Math.random() * example.length); // Start Point
    //     let i = Math.floor(Math.random() * images.length); // Start Point
        
    //     // const nextSlide = "../../images/hero.jpg";
    //     const nextSlide = images[i];

    //     document.querySelector(".slide").style.background = `url(${nextSlide}) no-repeat 50% 50%`;

    //     // Check If Index Is Under Max
    //     if(i < example.length - 1){
    //       // Add 1 to Index
    //       i++; 
    //     } else { 
    //       // Reset Back To O
    //       i = 0;
    //     }
        
    //     // Run function every x seconds
    //     let interval = setTimeout('changeImg()', 3000);
    // };

    render() {
        return (
            <div style={styles.container}>
                <div className="slide" id="slide">
                    <Nav />
                    <Searchbar />
                </div>
            </div>
        );
    }
}

export default SlideHeader;