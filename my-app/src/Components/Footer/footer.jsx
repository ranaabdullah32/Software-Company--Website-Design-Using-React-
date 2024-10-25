// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
            <Container>
                <Row className="text-center">
                    <Col md={4} className="branch mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        <p>1st floor Market 4, G-10/4, Islamabad</p>
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                        <p>+92-315-7351313</p>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                        <p>info@thesparksolutionz.com</p>
                    </Col>
                    <Col md={4} className="branch mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        <p>501-R1, Johar Town, Lahore</p>
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                        <p>+92-315-7351313</p>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                        <p>info@thesparksolutionz.com</p>
                    </Col>
                    <Col md={4} className="branch mb-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        <p>Office # 73, Street # 3 Abdullah Colony, Sargodha</p>
                        <FontAwesomeIcon icon={faPhone} size="lg" />
                        <p>+92-315-7351313</p>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                        <p>info@thesparksolutionz.com</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <p>© Copyrights 2024. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
