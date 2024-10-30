import React, { useState, useEffect } from 'react';
import { Offcanvas, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Ensure this path is correct
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import logo from '../../Images/logo-black.jpg';
import { Link } from 'react-router-dom';
import CustomCursor from '../CustomCursor/CustomCursor';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [currentCounts, setCurrentCounts] = useState([1, 2, 3, 4, 5, 6]); // Initial counts

    const handleToggle = () => setShow(!show);

    useEffect(() => {
        let interval;

        if (hoveredItem !== null) {
            interval = setInterval(() => {
                setCurrentCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    const target = hoveredItem;

                    // Check if hovering over the first three items
                    if (target <= 3) {
                        // Countdown logic for first three items
                        if (newCounts[target - 1] > target) {
                            newCounts[target - 1] -= 1; // Decrement for countdown
                        } else {
                            clearInterval(interval); // Clear interval when target is reached
                        }
                    } else {
                        // Count up logic for remaining items
                        if (newCounts[target - 1] < target) {
                            newCounts[target - 1] += 1; // Increment for counting up
                        } else {
                            clearInterval(interval); // Clear interval when target is reached
                        }
                    }
                    return newCounts;
                });
            }, 100); // Adjust speed as necessary
        }

        return () => clearInterval(interval); // Cleanup interval on unmount or when hoveredItem changes
    }, [hoveredItem]);

    const handleMouseEnter = (id) => {
        setHoveredItem(id);
        setCurrentCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (id <= 3) {
                newCounts[id - 1] = 8; // Start from 8 for the first three items
            } else {
                newCounts[id - 1] = 0; // Start from 0 for other items
            }
            return newCounts;
        });
    };

    const handleMouseLeave = (id) => {
        setHoveredItem(null);
        setCurrentCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[id - 1] = id; // Reset to original number for the respective nav item
            return newCounts;
        });
    };

    return (
        <>
            <header className="main-navigation">
                <CustomCursor/>
                <div className="color-lines position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 bg-color"></div>
                        </div>
                    </div>
                    <div className="color-line-overlay"></div>
                </div>
                <div className="container">
                    <Navbar expand="lg" className="navbar">
                        <Navbar.Brand className="simple-nav-logo col-6 col-lg-3" href="#">
                            <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                        </Navbar.Brand>
                        <div className="nav-items-container">
                            <Nav className="ml-auto col-8 col-lg-9">
                                {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'TESTIMONIALS', 'CONTACT'].map((item, index) => (
                                    <Nav.Link
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(index + 1)}
                                        onMouseLeave={() => handleMouseLeave(index + 1)}
                                        className="nav-item"
                                    >
                                        <div className="num-container">
                                            <span className="num-nav">0</span>
                                            <span data-count={currentCounts[index]} className="num-nav">{currentCounts[index]}</span>
                                            <span className="num-separator">.</span>
                                        </div>
                                        <span className="nav-text">{item}</span>
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </div>
                        <button className="sidemenu_btn" onClick={handleToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Navbar.Toggle />
                        <Navbar.Collapse></Navbar.Collapse>
                    </Navbar>
                </div>
            </header>

            {/* Offcanvas for Side Menu */}
            <Offcanvas show={show} onHide={handleToggle} className="side-menu" placement="top" style={{ width: '100vw', height: '100vh' }}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body className="side-menu-inner-content">
                    <div className="row w-100">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <Link to="/" className="navbar-brand home" href="#">
                                <img src="https://www.thesparksolutionz.com/architect-studio/img/logo.png" alt="Logo" style={{ width: '100%', height: 'auto', maxWidth: '450px' }} />
                            </Link>
                        </div>
                        <div className="col-12 col-lg-8">
                            <nav className="side-nav w-100">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link home" href="#home">HOME</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#about">ABOUT</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#services">SERVICES</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#portfolio">PORTFOLIO</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#testimonials">TESTIMONIALS</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#contact">CONTACT</a></li>
                                    <li className="nav-item"><a className="nav-link home" href="#career">CAREER</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-start justify-content-end flex-column">
                            <div className="side-footer text-white w-100 text-end">
                                <div className="menu-company-details">
                                    <p><a href="tel:+923157351313">+92-315-7351313</a></p>
                                    <p><a href="mailto:info@thesparksolutionz.com">info@thesparksolutionz.com</a></p>
                                </div>
                                <ul className="social-icons-simple d-flex justify-content-end">
                                    <li><a className="facebook-text-hvr" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SparkSolutionz/">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a></li>
                                    <li><a className="linkedin-text-hvr" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/spark-solutionz/">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a></li>
                                    <li><a className="instagram-text-hvr" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sparksolutionz/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a></li>
                                </ul>
                                <p className="text-white">@Copyrights 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default NavBar;
