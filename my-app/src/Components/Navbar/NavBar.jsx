import React, { useState  } from 'react';
import { Offcanvas, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Ensure this path is correct
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import logo from '../../Images/logo-black.jpg'
import { Link } from 'react-router-dom';
import CustomCursor from '../CustomCursor/CustomCursor';
const NavBar = () => {
    const [show, setShow] = useState(false);
  
    const handleToggle = () => setShow(!show);

    return (
        <>
        
            <header className="main-navigation">
            <CustomCursor/>
            <div class="color-lines position-relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 bg-color">
                                </div>
                                </div>
                                </div>
                                <div class="color-line-overlay"></div>
                                </div>
                <div class="container">
             
                <Navbar expand="lg" className="navbar ">
                    <Navbar.Brand className="simple-nav-logo col-6 col-lg-3" href="#">
                        <img src={logo} alt="Logo"   style={{  width: '100%', height: 'auto', maxWidth: '300px' }}/>
                    </Navbar.Brand>
                    <div className="nav-items-container">
                        <Nav className="ml-auto col-8 col-lg-9" >
                        <Nav.Link href="#home" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="1" className="num-nav">1</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">HOME</span>

</Nav.Link>
<Nav.Link href="#about" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="2" className="num-nav">2</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">ABOUT</span>
</Nav.Link>
<Nav.Link href="#services" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="3" className="num-nav">3</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">SERVICES</span>
</Nav.Link>
<Nav.Link href="#portfolio" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="4" className="num-nav">4</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">PORTFOLIO</span>
</Nav.Link>
<Nav.Link href="#testimonials" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="5" className="num-nav">5</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">TESTIMONIALS</span>
</Nav.Link>
<Nav.Link href="#contact" className="nav-item">
    <div className="num-container">
        <span className="num-nav">0</span><span data-count="6" className="num-nav">6</span><span className="num-separator">.</span>
    </div>
    <span className="nav-text">CONTACT</span>
</Nav.Link>

                        </Nav>
                    </div>
                    <button className="sidemenu_btn" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </header>

            {/* Offcanvas for Side Menu */}
            <Offcanvas show={show} onHide={handleToggle} className="side-menu" placement="top" style={{ width: '100vw', height: '100vh' }}>
    {/* Keep the default close button */}
    
    <Offcanvas.Header closeButton>  </Offcanvas.Header>
    
    <Offcanvas.Body className="side-menu-inner-content">
 
        <div className="row w-100">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <Link to="/" className="navbar-brand home" href="#">
                    <img src="https://www.thesparksolutionz.com/architect-studio/img/logo.png" alt="Logo" style={{
                        width: '100%', 
                        height: 'auto', 
                        maxWidth: '450px' 
                    }} />
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
                        <p><a href="mailto: info@thesparksolutionz.com">info@thesparksolutionz.com</a></p>
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