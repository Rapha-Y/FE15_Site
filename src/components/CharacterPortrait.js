import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterModal from './CharacterModal';

function CharacterPortrait(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Button variant="danger" className="p-0 my-3" onClick={handleShow}>
                <Image src={props.img} style={{backgroundColor: "#eee"}} fluid />
                <h5 style={{marginBottom: 0, paddingTop: 4, paddingBottom: 4}}>{props.name}</h5>
            </Button>

            <CharacterModal
                show={show}
                onHide={handleClose}
                name={props.name}
                img={props.img}
                age={props.age}
                class={props.class}
                description={props.description}
                onClick={handleClose}
            />
        </div>
    );
}

export default CharacterPortrait;