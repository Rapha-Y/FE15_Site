import React from 'react';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CharacterPortrait(props) {
    return (
        <Button variant="outline-dark" className="bg-light p-1">
            <Image src={props.img} className="border border-dark" fluid />
            <h5 style={{marginBottom: 0}}>{props.name}</h5>
        </Button>
    );
}

export default CharacterPortrait;