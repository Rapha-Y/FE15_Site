import React, { useState } from 'react';
import { Container, Image, Button, Modal, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CharacterPortrait(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Button variant="danger" className="p-1 my-3" onClick={handleShow}>
                <Image src={props.img} style={{backgroundColor: "#eee"}} fluid />
                <h5 style={{marginBottom: 0}}>{props.name}</h5>
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={4}>
                                <Image src={props.img} className="border" />
                            </Col>
                            <Col xs={8}>
                                <p>Age: {props.age}</p>
                                <p>Class: {props.class}</p>
                                <p>{props.description}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CharacterPortrait;