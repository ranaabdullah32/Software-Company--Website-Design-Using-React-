import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="text-center mb-3">
                    {/* Branch Information */}
                    <Col md={4} className="branch mb-3">
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="me-2" />
                            <p className="mb-0">1st floor Market 4, G-10/4, Islamabad</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPhone} size="lg" className="me-2" />
                            <p className="mb-0">+92-315-7351313</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPaperPlane} size="lg" className="me-2" />
                            <p className="mb-0">info@thesparksolutionz.com</p>
                        </div>
                    </Col>
                    <Col md={4} className="branch mb-3">
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="me-2" />
                            <p className="mb-0">501-R1, Johar Town, Lahore</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPhone} size="lg" className="me-2" />
                            <p className="mb-0">+92-315-7351313</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPaperPlane} size="lg" className="me-2" />
                            <p className="mb-0">info@thesparksolutionz.com</p>
                        </div>
                    </Col>
                    <Col md={4} className="branch mb-3">
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="me-2" />
                            <p className="mb-0">Office # 73, Street # 3 Abdullah Colony, Sargodha</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPhone} size="lg" className="me-2" />
                            <p className="mb-0">+92-315-7351313</p>
                        </div>
                        <div className="branch-item">
                            <FontAwesomeIcon icon={faPaperPlane} size="lg" className="me-2" />
                            <p className="mb-0">info@thesparksolutionz.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <Row className="footer-bottom">
                <Col className="d-flex justify-content-start">
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </Col>
                <Col className="d-flex justify-content-end">
                    <p className="copyright mb-0">© Copyrights 2024. All Rights Reserved.</p>
                </Col>
            </Row>
            </Container>
        </footer>
    );
};

export default Footer;
