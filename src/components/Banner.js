import React from 'react';
import { Image, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    /* Add video? Add text? Fill the sides of the image, at least */
    return (
        <div>
            <div>
            <Row>
                <Col md={12}>
                    <Image src={require("../resources/wallpaper.png")} fluid />
                </Col>
                <Col>
                    <Button 
                        variant="danger" 
                        style={{maxWidth: 256, padding: 0, marginTop: -180, marginLeft: 10}} 
                        className="d-none d-lg-block"
                    >
                        <Image src={require("../resources/trailerthumbnail.jpg")} fluid />
                        <div>Watch Trailer</div>
                    </Button>

                    <Button 
                        variant="danger" 
                        style={{maxWidth: 192, padding: 0, marginTop: -145, marginLeft: 10}} 
                        className="d-none d-md-block d-lg-none"
                    >
                        <Image src={require("../resources/trailerthumbnail.jpg")} fluid />
                        <div>Watch Trailer</div>
                    </Button>
                </Col>
            </Row>
            </div>

            <Button 
                variant="danger" 
                block
                style={{maxWidth: 256, padding: 0}} 
                className="d-md-none mx-auto my-3"
            >
                <Image src={require("../resources/trailerthumbnail.jpg")} fluid />
                <div>Watch Trailer</div>
            </Button>
        </div>
    );
}

export default Banner;