import React from 'react';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoButton(props) {
    return (
        <Button 
            variant="danger" 
            style={{
                padding: 0,
                maxWidth: props.maxWidth, 
                marginTop: props.marginTop, 
                marginLeft: props.marginLeft
            }} 
            className={props.className}
        >
            <Image src={require("../resources/trailerthumbnail.jpg")} fluid />
            <div>Watch Trailer</div>
        </Button>
    );
}

export default VideoButton;