import React from 'react';
import { Image, Button } from 'react-bootstrap';

function CharacterPortrait() {
    return (
        <Button variant="outline-dark" className="bg-light p-1">
            <Image src={require("../resources/portraits/yuzu.png")} className="border border-dark" />
            <h5 style={{marginBottom: 0}}>Yuzu</h5>
        </Button>
    );
}

export default CharacterPortrait;