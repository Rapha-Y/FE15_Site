import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    /* Add video? Add text? Fill the sides of the image, at least */
    return (
        <Image src={require("../resources/wallpaper.png")} fluid />
    );
}

export default Banner;