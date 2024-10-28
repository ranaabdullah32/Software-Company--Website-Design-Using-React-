import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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

  const portfolioItems = [
    { title: "Fitness Website", imgSrc: p1, categories: ["ALL", "DESIGN", "HTML & CSS", "DEVELOPMENT"] },
    { title: "Smartwatch Website", imgSrc: p2, categories: ["ALL", "DESIGN", "SEO"] },
    { title: "Services Website", imgSrc: p3, categories: ["ALL"] },
    { title: "Headphones Website", imgSrc: p4, categories: ["ALL", "DESIGN", "HTML & CSS", "SEO", "DEVELOPMENT"] },
  ];

  const filters = ["ALL", "DESIGN", "HTML & CSS", "SEO", "DEVELOPMENT"];

  const filteredItems = portfolioItems.filter((item) =>
    item.categories.includes(activeFilter)
  );

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
              onClick={() => setActiveFilter(filter)}
              className={`portfolio-filter mx-2 text-decoration-none ${
                activeFilter === filter ? "active-filter" : "text-muted"
              }`}
              style={{
                color: activeFilter === filter ? "var(--primary-color)" : "inherit"
              }}
            >
              {filter}
            </Link>
          ))}
        </Col>
      </Row>

      {/* Portfolio Items with TransitionGroup */}
      <TransitionGroup className="portfolio-items">
        <CSSTransition
          key={activeFilter}
          classNames="fade"
          timeout={300}
        >
          <Row className="g-4">
            {filteredItems.map((portfolio, idx) => (
              <Col md={6} key={idx}>
                <div className="portfolio-item">
                  <img src={portfolio.imgSrc} alt={portfolio.title} className="portfolio-image" />
                  <div className="portfolio-overlay">
                    <FontAwesomeIcon icon={faPlus} className="portfolio-overlay-icon" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CSSTransition>
      </TransitionGroup>

      {activeFilter === "ALL" && (
        <Row className="portfolio-summary">
          <Col md={6} className="text-center text-lg-left">
            <span className="portfolio-summary-text">We've Completed More Than</span>
            <h4 className="portfolio-summary-number text-yellow">530</h4>
            <span className="portfolio-summary-text">Projects for Our Amazing Clients</span>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Portfolio;
