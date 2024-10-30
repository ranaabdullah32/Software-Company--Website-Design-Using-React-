import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from '../../../Images/p1.jpg';
import p2 from '../../../Images/p2.jpg';
import p3 from '../../../Images/p3.jpg';
import p4 from '../../../Images/p4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [fade, setFade] = useState(false);

  const portfolioItems = [
    { title: "Fitness Website", imgSrc: p1, categories: ["ALL", "DESIGN", "HTML_CSS", "DEVELOPMENT"] },
    { title: "Smartwatch Website", imgSrc: p2, categories: ["ALL", "DESIGN", "SEO"] },
    { title: "Services Website", imgSrc: p3, categories: ["ALL"] },
    { title: "Headphones Website", imgSrc: p4, categories: ["ALL", "DESIGN", "HTML_CSS", "SEO", "DEVELOPMENT"] },
  ];

  const filters = ["ALL", "DESIGN", "HTML_CSS", "SEO", "DEVELOPMENT"];

  const handleFilterClick = (filter) => {
    setFade(true);
    setActiveFilter(filter);
    setTimeout(() => setFade(false), 300); // Delay to allow fade out effect
  };

  const filteredItems = activeFilter === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeFilter));

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

      <Row className={`portfolio-items g-4 ${fade ? 'fade-out' : 'fade-in'}`}>
        {filteredItems.map((portfolio, idx) => (
          <Col md={6} key={idx} className={`portfolio-item ${portfolio.categories.join(' ')}`}>
            <div className="portfolio-item-inner">
              <img src={portfolio.imgSrc} alt={portfolio.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-overlay-icon" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
