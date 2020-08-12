import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <Jumbotron style={{margin: 0}}>
            <Container>
                <Row>
                    <Col md={3}>
                        <ul className="list-unstyled">
                            <li>
                                <h5>Official Links</h5>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Nintendo">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nintendo/">Instagram</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/NintendoAmerica">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/nintendo">Youtube</a>
                            </li>
                        </ul>
                    </Col>
                <Col md={3}>
                        <ul className="list-unstyled">
                            <li>
                                <h5>Resources</h5>
                            </li>
                            <li>
                                <a href="https://serenesforest.net">Serenes Forest</a>
                            </li>
                            <li>
                                <a href="https://fireemblemwiki.org">Wiki</a>
                            </li>
                            <li>
                                <a href="https://fireemblem.fandom.com/wiki/Fire_Emblem_Wiki">Wikia</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className="list-unstyled">
                            <li>
                                <h5>Community</h5>
                            </li>
                            <li>
                                <a href="https://aminoapps.com/c/fire-emblem-amino/home/">Amino</a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/r/fireemblem/">Reddit</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul className="list-unstyled">
                            <li>
                                <h5>Other Titles</h5>
                            </li>
                            <li>
                                <a href="https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/">
                                    Three Houses
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nintendo.com/games/detail/fire-emblem-awakening-3ds/">
                                    Awakening
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nintendo.com/games/detail/fire-emblem-shadow-dragon-wii-u/">
                                    Shadow Dragon
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nintendo.com/games/detail/fire-emblem-the-sacred-stones-wii-u/">
                                    The Sacred Stones
                                </a>
                            </li>
                            <li>
                                <a href="https://www.nintendo.com/games/detail/fire-emblem-wii-u/">
                                    The Blazing Blade
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Footer;