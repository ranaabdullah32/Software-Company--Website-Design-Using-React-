import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Portfolio from "./Portfolio/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import weblogo from "../../Images/5.jpg";
import graphicdesign from "../../Images/6.png";
import applogo from "../../Images/app-dev.png";
import seologo from "../../Images/7.png";
import uilogo from "../../Images/9.jpg";
import supportlogo from "../../Images/support.jpg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import "./Home.css"; // Importing the custom CSS file
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import  teamone from '../../Images/team1.jpg';
import  teamtwo from '../../Images/team2.jpg';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slideUp = () => {
    setIndex((index + 1) % 3); // Cycle forward between 0, 1, and 2
  };

  const slideDown = () => {
    setIndex((index - 1 + 3) % 3); // Cycle backward between 0, 1, and 2
  };

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const { width, height } = container.getBoundingClientRect();
    const x = (e.clientX / width - 0.5) * 10;
    const y = (e.clientY / height - 0.5) * 10;

    container.querySelectorAll(".team-image").forEach((image) => {
      image.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelectorAll(".team-image").forEach((image) => {
      image.style.transform = "translate(0, 0)";
    });
  };

  useEffect(() => {
    if (inView) {
      setAnimationTriggered(true);
    }
  }, [inView]);
  



 return (
    <>
      <div className="home-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="inner-bg-overlay"></div>
        <div className="row">
          {/* Left side for text content */}
          <div className="col-12 col-lg-6 left-content">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>

            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
              {[0, 1, 2].map((i) => (
                <Carousel.Item key={i}>
                  <div className="text-slide">
                    <h1 className="main-heading">WELCOME TO SPARK SOLUTIONZ</h1>
                    <p className="description">
                      Spark Solutionz is a Pakistan-based web application development company providing a wide range of web development solutions locally and globally. We pride ourselves on offering innovative and unique web application development solutions to meet all business needs.
                    </p>
                    <button className="learn-more-btn">
                      <span>LEARN MORE</span>
                    </button>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Right side for images */}
          <div className="col-12 col-lg-6 right-content">
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} className="vertical-carousel">
              {[0, 1, 2].map((i) => (
                <Carousel.Item key={i}>
                  <img
                    src={require(`../../Images/slide-${i + 1}.jpg`)} // Dynamically require the images
                    alt={`Slide ${i + 1}`}
                    className="team-image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Slider controls */}
        <div className="slider-controls">
          <button className="up-arrow" onClick={slideUp}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button className="down-arrow" onClick={slideDown}>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      <section className="about-sec" id="about-sec">
        <div className="about-overlay"></div>
        <Container className="service-container">
          <Row className="flex-column flex-md-row">
            <Col md={6} className="service-area">
              <Row className="g-4">
                <Col xs={12} md={6} className="text-center">
                  <img src={weblogo} alt="Web Development" className="service-icon" />
                  <p className="serviceicon-text mt-3">Web Development</p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={applogo} alt="App Development" className="service-icon" />
                  <p className="serviceicon-text mt-3">App Development</p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={graphicdesign} alt="Graphic Designing" className="service-icon" />
                  <p className="serviceicon-text mt-3">Graphic Designing</p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={seologo} alt="SEO Optimization" className="service-icon" />
                  <p className="serviceicon-text mt-3">SEO Optimization</p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={uilogo} alt="UI/UX Designing" className="service-icon" />
                  <p className="serviceicon-text mt-3">UI/UX Designing</p>
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <img src={supportlogo} alt="Website Maintenance" className="service-icon" />
                  <p className="serviceicon-text mt-3">Website Maintenance</p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="description-area d-flex flex-column">
              <h4 className="title">
                <p>OUR</p>
                <span className="service-title">SERVICES</span>
              </h4>
              <p className="description-text mt-6">
                We are a Pakistan-based web application development company that you can rely on for high-quality programming and exceptional services. Our services are limitless when it comes to web development and design solutions. We strive to provide our clients with the best solutions to what matters the most to their business.
              </p>
              <p className="description-text mt-6">With our approach to Web Design, our methods continue to be proven in a continuous challenging marketplace with delivering what we promise.</p>
              <Button className="learn-more-btn mt-6">
                <span>LEARN MORE</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section" id="achievements-section" ref={ref}>
        <Container>
          <h4 className="section-title text-center">Delivering IT Solutions</h4>
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="text-center">
              <div className="achievement-card">
                <div className="circle-progress">
                  <CircularProgressbar
                    value={animationTriggered ? 700 : 0}
                    maxValue={1000}
                    text="500+"
                    styles={buildStyles({
                      pathColor: "#000",
                      textColor: "#666",
                      textSize : 15  ,
                      trailColor: "#ddd",
                    })}
                  />
                </div>
                <p className="achievement-description">Satisfied customers</p>
              </div>
            </Col>

            <Col xs={12} md={4} className="text-center">
              <div className="achievement-card">
                <div className="circle-progress">
                  <CircularProgressbar
                    value={animationTriggered ? 900 : 0}
                    maxValue={1000}
                    text="1000"
                    styles={buildStyles({
                      pathColor: "#000",
                      textColor: "#666",
                      textSize : 15  ,
                      trailColor: "#ddd",
                    })}
                  />
                </div>
                <p className="achievement-description">Project completed</p>
              </div>
            </Col>

            <Col xs={12} md={4} className="text-center">
              <div className="achievement-card">
                <div className="circle-progress">
                  <CircularProgressbar
                    value={animationTriggered ? 200 : 0}
                    maxValue={1000}
                    text="200"
                    styles={buildStyles({
                      pathColor: "#000",
                      textColor: "#666",
                      textSize : 15  , 
                      trailColor: "#ddd",
                    })}
                  />
                </div>
                <p className="achievement-description">CMS installations</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     {/* Amazing team  Section */}

     <section className="amazing-team">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={6} className="text-right team-heading">
            <h2>WE HAVE AMAZING TEAM</h2>
          </Col>

          <Col lg={7} md={6}>
            <Row className="Teamimage-section">
              <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={2}
                loop={true}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  900: { slidesPerView: 2 },
                }}
              >
                <SwiperSlide>
                  <Col>
                    <div className="team-member">
                      <div className="image-container">
                        <img
                          className="d-block"
                          src={teamone}
                          alt="Eden Wooderburg"
                        />
                        <div className="overlay">
                          <Link to="/facebook-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                          <Link to="/linkedin-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                          <Link to="/instagram-link">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3>Eden Wooderburg</h3>
                        <p>Creative Head</p>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>

                <SwiperSlide>
                  <Col>
                    <div className="team-member">
                      <div className="image-container">
                        <img
                          className="d-block"
                          src={teamtwo}
                          alt="Angelo Walking"
                        />
                        <div className="overlay">
                          <Link to="/facebook-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                          <Link to="/linkedin-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                          <Link to="/instagram-link">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3>Angelo Walking</h3>
                        <p>Design Lead</p>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>
                <SwiperSlide>
                  <Col>
                    <div className="team-member">
                      <div className="image-container">
                        <img
                          className="d-block"
                          src={teamone}
                          alt="Eden Wooderburg"
                        />
                        <div className="overlay">
                          <Link to="/facebook-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                          <Link to="/linkedin-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                          <Link to="/instagram-link">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3>Eden Wooderburg</h3>
                        <p>Creative Head</p>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>

                <SwiperSlide>
                  <Col>
                    <div className="team-member">
                      <div className="image-container">
                        <img
                          className="d-block"
                          src={teamtwo}
                          alt="Angelo Walking"
                        />
                        <div className="overlay">
                          <Link to="/facebook-link">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                          <Link to="/linkedin-link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                          <Link to="/instagram-link">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3>Angelo Walking</h3>
                        <p>Design Lead</p>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>
              </Swiper>

              <div className="custom-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className="custom-next">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
<Portfolio/>
      </>
    
  );
};


export default Home;
