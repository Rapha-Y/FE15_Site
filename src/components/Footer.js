import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FooterLink from './FooterLink';

function Footer() {
    return (
        <Jumbotron style={{margin: 0}} fluid>
            <Container>
                <Row>
                    <Col md={3} className="pl-4">
                        <ul className="list-unstyled">
                            <li>
                                <h5>Official Links</h5>
                            </li>
                            <li>
                                <FooterLink 
                                    iconName="facebook"
                                    name="Facebook" 
                                    href="https://www.facebook.com/Nintendo" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName="instagram"
                                    name="Instagram" 
                                    href="https://www.instagram.com/nintendo/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName="twitter"
                                    name="Twitter" 
                                    href="https://twitter.com/NintendoAmerica" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName="youtube"
                                    name="Youtube" 
                                    href="https://www.youtube.com/nintendo" 
                                />
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="pl-4">
                        <ul className="list-unstyled">
                            <li>
                                <h5>Resources</h5>
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Serenes Forest" 
                                    href="https://serenesforest.net" 
                                />
                            </li>
                            <li>
                                <FooterLink
                                    iconName={null} 
                                    name="Wiki" 
                                    href="https://fireemblemwiki.org" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Wikia" 
                                    href="https://fireemblem.fandom.com/wiki/Fire_Emblem_Wiki" 
                                />
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="pl-4">
                        <ul className="list-unstyled">
                            <li>
                                <h5>Community</h5>
                            </li>
                            <li>
                                <FooterLink
                                    iconName={null} 
                                    name="Amino" 
                                    href="https://aminoapps.com/c/fire-emblem-amino/home/" 
                                />
                            </li>
                            <li>
                                <FooterLink
                                    iconName={null} 
                                    name="Reddit" 
                                    href="https://www.reddit.com/r/fireemblem/" 
                                />
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} className="pl-4">
                        <ul className="list-unstyled">
                            <li>
                                <h5>Previous Titles</h5>
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Fates: Conquest" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-fates-conquest-3ds/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Fates: Birthright" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-fates-birthright-3ds/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Awakening" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-awakening-3ds/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="Shadow Dragon" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-shadow-dragon-wii-u/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="The Sacred Stones" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-the-sacred-stones-wii-u/" 
                                />
                            </li>
                            <li>
                                <FooterLink 
                                    iconName={null}
                                    name="The Blazing Blade" 
                                    href="https://www.nintendo.com/games/detail/fire-emblem-wii-u/" 
                                />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Footer;