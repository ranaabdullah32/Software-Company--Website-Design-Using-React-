import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import teamImage from "../../../Images/blog1.jpg"; // Ensure this image path is correct

const Blog = () => {
  const [inView, setInView] = useState(false);
  const blogRef = useRef(null);

  // Intersection Observer to track when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing after it enters view
        }
      },
      { threshold: 0.3 } // Trigger when 10% of the target is visible
    );

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <div className="blog-section" ref={blogRef}>
      <div className={`blog-content ${inView ? 'slide-in-left' : ''}`}>
        <h4>WHAT MAKES <br /> US DIFFERENT</h4>
        <p>
          With our approach to Web Design, our methods continue to be proven in a
          continuously challenging marketplace with delivering what we promise.
        </p>
        <button className="learn-more-btn">
          <span>LEARN MORE</span>
        </button>
      </div>
      <div className={`blog-image ${inView ? 'slide-in-right' : ''}`}>
        <img src={teamImage} alt="Team" />
      </div>
    </div>
  );
};

export default Blog;
