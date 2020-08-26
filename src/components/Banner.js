import React, { useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoButton from './VideoButton';
import VideoModal from './VideoModal';

function Banner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <Row style={{margin: 0}}>
                    <Col md={12} style={{padding: 0}}>
                        <Image src={require("../resources/wallpaper.png")} fluid />
                    </Col>
                    <Col>
                        {/* Button for large size screens */}
                        <VideoButton
                            maxWidth={256}
                            marginTop={-180}
                            marginLeft={10}
                            className="d-none d-lg-block"
                            block={false}
                            onClick={handleShow}
                        />

                        {/* Button for medium size screens */}
                        <VideoButton
                            maxWidth={192}
                            marginTop={-145}
                            marginLeft={10}
                            className="d-none d-md-block d-lg-none"
                            block={false}
                            onClick={handleShow}
                        />
                    </Col>
                </Row>
            </div>

            {/* Button for small size screens */}
            <VideoButton
                maxWidth={256}
                marginTop={0}
                marginLeft={0}
                className="d-md-none mx-auto my-3"
                block={true}
                onClick={handleShow}
            />

            <VideoModal show={show} handleClose={handleClose} />
        </div>
    );
}

export default Banner;