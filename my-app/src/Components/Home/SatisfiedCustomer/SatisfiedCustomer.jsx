import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SatisfiedCustomer.css";
import test1 from '../../../Images/test1.jpg';
import test2 from '../../../Images/test2.jpg';
import dct from '../../../Images/dct.png';
import dream from '../../../Images/dream.png';
import glass from '../../../Images/glass.png';
import laptop from '../../../Images/laptop.png';
import sama from '../../../Images/sama.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const SatisfiedCustomer = () => {
  return (
    <>
      <div className="satisfied-customer-container">
        <div className="satisfied-customer-left">
          <h2>SATISFIED CUSTOMERS</h2>
        </div>
        <div className="satisfied-customer-right">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Nadeem has excellent design sense and is very willing to work with you until he comes back with a design that you truly love. Some of the attention to detail could be improved as I had to repeat some information during discussion and a few of the visual elements weren’t consistent in initial drafts, but the end result is polished and I'm quite happy.
                </p>
                <div className="testimonial-profile">
                  <img src={test1} alt="David Shapiro" className="profile-image" />
                  <p className="profile-name">Rusi</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Spark and their team did an excellent job on this Project. They worked late and on weekends to get the work finished and went the extra mile to help us get what we needed. I would highly recommend them and will use them again in the future.
                </p>
                <div className="testimonial-profile">
                  <img src={test2} alt="Rusi" className="profile-image" />
                  <p className="profile-name">David Shapiro</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon" />
                <p className="quote">
                  Professional and On time. I highly recommend Nadeem.
                </p>
                <div className="testimonial-profile">
                  <img src={test2} alt="Rusi" className="profile-image" />
                  <p className="profile-name">Darbslayos</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-container">
  <Swiper
    spaceBetween={20}
    slidesPerView={6} // Change this to 6 for larger screens
    loop={true} // Ensure the slider can loop through slides
    breakpoints={{
      1200: {
        slidesPerView: 6, // 6 slides for large screens
      },
      992: {
        slidesPerView: 4, // 4 slides for medium screens
      },
      768: {
        slidesPerView: 3, // 3 slides for small to medium screens
      },
      576: {
        slidesPerView: 2, // 2 slides for small screens
      },
      480: {
        slidesPerView: 1, // 1 slide for extra small screens
      },
    }}
    className="sponsors-slider"
  >
    <SwiperSlide><img src={dct} alt="DCT" className="sponsor-image" /></SwiperSlide>
    <SwiperSlide><img src={dream} alt="Dream" className="sponsor-image" /></SwiperSlide>
    <SwiperSlide><img src={glass} alt="Glass" className="sponsor-image" /></SwiperSlide>
    <SwiperSlide><img src={laptop} alt="Laptop" className="sponsor-image" /></SwiperSlide>
    <SwiperSlide><img src={sama} alt="Sama" className="sponsor-image" /></SwiperSlide>
    <SwiperSlide><img src={dct} alt="DCT" className="sponsor-image" /></SwiperSlide>
  </Swiper>
</div>

    </>
  );
};

export default SatisfiedCustomer;
