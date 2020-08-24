import React from 'react';
import { Container, Image, Button, Modal, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CharacterModal(props) {
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
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
                <Button variant="dark" onClick={props.onClick}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CharacterModal;