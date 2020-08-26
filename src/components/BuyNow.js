import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BuyNow() {
    return (
        <Container className="my-5 text-center text-light" style={{paddingTop: 36}}>
            <div style={{maxWidth: 512, padding: 12}} className="mx-auto border bg-dark">
                <h1 style={{paddingTop: 12, paddingBottom: 12}}>Available Now</h1>
                <Image 
                    src={require("../resources/boxart.png")} 
                    fluid 
                    style={{paddingBottom: 24}} 
                />
                <Button 
                    variant="danger" 
                    href="https://www.nintendo.com/games/detail/fire-emblem-echoes-shadows-of-valentia-3ds/"
                    target="_blank"
                    style={{maxWidth: 360, marginBottom: 24}}    
                    className="mx-auto d-block"
                >
                    
                    <h2>Buy from Nintendo</h2>
                </Button>
            </div>
        </Container>
    );
}

export default BuyNow;