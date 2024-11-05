import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from '../../../Images/p1.jpg';
import p2 from '../../../Images/p2.jpg';
import p3 from '../../../Images/p3.jpg';
import p4 from '../../../Images/p4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import './Portfolio.css';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [fade, setFade] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    { title: "Fitness Website", imgSrc: p1, categories: ["ALL", "DESIGN", "HTML&CSS", "DEVELOPMENT"] },
    { title: "Smartwatch Website", imgSrc: p2, categories: ["ALL", "DESIGN", "SEO"] },
    { title: "Services Website", imgSrc: p3, categories: ["ALL"] },
    { title: "Headphones Website", imgSrc: p4, categories: ["ALL", "DESIGN", "HTML&CSS", "SEO", "DEVELOPMENT"] },
  ];

  const filters = ["ALL", "DESIGN", "HTML&CSS", "SEO", "DEVELOPMENT"];

  const handleFilterClick = (filter) => {
    setFade(true);
    setActiveFilter(filter);
    setTimeout(() => setFade(false), 300);
  };

  const filteredItems = activeFilter === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeFilter));

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };


  const handleNext = () => {
    if (currentIndex < portfolioItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container className="portfolio-container py-5">
      <h1 className="portfolio-heading mb-3">OUR</h1>
      <h2 className="portfolio-title mb-4">AMAZING PORTFOLIO</h2>

      <Row className="mb-4">
        <Col>
          {filters.map((filter) => (
            <Link
              key={filter}
              to="#"
              onClick={() => handleFilterClick(filter)}
              className={`portfolio-filter mx-2 text-decoration-none ${filter === activeFilter ? "active-filter" : ""}`}
            >
              {filter.replace('_', ' ')}
            </Link>
          ))}
        </Col>
      </Row>

      <TransitionGroup className={`portfolio-items g-4 ${fade ? 'fade-out' : 'fade-in'}`}>
        <Row>
          {filteredItems.map((portfolio, idx) => (
            <CSSTransition
              key={idx}
              timeout={300}
              classNames="fade"
            >
              <Col xs={12} sm={12} md={12} lg={5} className={`portfolio-item ${portfolio.categories.join(' ')}`}>
                <div className="portfolio-item-inner">
                  <img src={portfolio.imgSrc} alt={portfolio.title} className="portfolio-image" />
                  <div className="portfolio-overlay" onClick={() => openModal(idx)}>
                    <FontAwesomeIcon icon={faPlus} className="portfolio-overlay-icon" />
                  </div>
                </div>
              </Col>
            </CSSTransition>
          ))}
        </Row>
      </TransitionGroup>
      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
  className="modal"
  overlayClassName="modal-overlay"
>
  <button className="close-button" onClick={() => setIsModalOpen(false)}>
    <FontAwesomeIcon icon={faTimes} /> {/* Correct icon for closing */}
  </button>
  <button className="nav-button " id="imgpreviousbtn" onClick={handlePrevious} disabled={currentIndex === 0}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
  <img src={portfolioItems[currentIndex].imgSrc} alt={portfolioItems[currentIndex].title} className="modal-image" />
  <button className="nav-button  " onClick={handleNext} disabled={currentIndex === portfolioItems.length - 1}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
</Modal>


    
    </Container>
  );
};

export default Portfolio;
