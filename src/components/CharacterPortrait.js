import React from 'react';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CharacterPortrait(props) {
    return (
        <Button variant="primary" className="p-1 my-3">
            <Image src={props.img} className="border border-dark bg-light" fluid />
            <h5 style={{marginBottom: 0}}>{props.name}</h5>
        </Button>
    );
}

export default CharacterPortrait;