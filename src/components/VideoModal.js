import React from 'react';
import { Modal, Button, ResponsiveEmbed } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
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
                <Button variant="dark" onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VideoModal;