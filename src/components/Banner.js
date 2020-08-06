import React, { useState } from 'react';
import { Image, Modal, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoButton from './VideoButton';

function Banner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        block={false}
                        onClick={handleShow}
                    />

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

            <VideoButton
                maxWidth={256}
                marginTop={0}
                marginLeft={0}
                className="d-md-none mx-auto my-3"
                block={true}
                onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Official Announcement Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe 
                            title="gametrailer"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/-tSY0giG3CI"
                            allowFullScreen
                        />
                    </ResponsiveEmbed>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Banner;