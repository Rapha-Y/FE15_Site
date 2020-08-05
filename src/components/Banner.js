import React from 'react';
import { Image, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoButton from './VideoButton';

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
                    <VideoButton
                        maxWidth={256}
                        marginTop={-180}
                        marginLeft={10}
                        className="d-none d-lg-block"
                    />

                    <VideoButton
                        maxWidth={192}
                        marginTop={-145}
                        marginLeft={10}
                        className="d-none d-md-block d-lg-none"
                    />
                </Col>
            </Row>
            </div>

            <VideoButton
                maxWidth={256}
                marginTop={0}
                marginLeft={0}
                className="d-md-none mx-auto my-3"
            />
        </div>
    );
}

export default Banner;