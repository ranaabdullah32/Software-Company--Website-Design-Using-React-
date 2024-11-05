import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const footerRef = useRef(null); // Ref for the footer container
    const [isVisible, setIsVisible] = useState(false); // State to track visibility

    // Use effect to set up the intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set to true when the footer is in view
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.1, // Trigger when at least 10% of the footer is in view
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current); // Observe the footer element
        }

        return () => {
            observer.disconnect(); // Clean up the observer on component unmount
        };
    }, []);

    return (
        <footer className="footer">
            <Container 
                ref={footerRef} 
                className={`footer__branches-container ${isVisible ? 'slide-in-left' : ''}`}>
           <h2 className="branches-title">Our Branches</h2>
      <Row>
        <Col md={4} sm={10} className="footer__branch">
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon" />
            <p>1st floor Market 4, G-10/4, Islamabad</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            <p>+92-315-7351313</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <p>info@thesparksolutionz.com</p>
          </div>
        </Col>
        <Col md={4} sm={10} className="footer__branch" id='footerbranch2'>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon" />
            <p>501-R1, Johar Town, Lahore</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            <p>+92-315-7351313</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <p>info@thesparksolutionz.com</p>
          </div>
        </Col>
        <Col md={4} sm={10} className="footer__branch" id='footerbranch3'>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__icon" />
            <p>Office # 73, Street # 3 Abdullah Colony, Sargodha</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            <p>+92-315-7351313</p>
          </div>
          <div className="footer__branch-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <p>info@thesparksolutionz.com</p>
          </div>
        </Col>
      </Row>
            </Container>
            <section className='footer_bottom_section'>
            <Container >
                <div className="footer__bottom">
                    <Container>
                        <Row>
                            <Col lg={6} sm={10}>
                                <div className="footer__social-container">
                                    <div className="footer__social-icon">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div>
                                    <div className="footer__social-icon">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </div>
                                    <div className="footer__social-icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} sm={10}>
                                <div className="footer__copyright">
                                    © Copyrights 2024. All Rights Reserved.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </Container>
            </section>
        </footer>
    );
};

export default Footer;
