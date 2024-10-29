import React from "react";
import "./Blog.css";
import teamImage from "../../../Images/blog1.jpg"; // Make sure this image path is correct

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-content">
        <h4>WHAT MAKES <br></br> US DIFFERENT</h4>
        <p>
          With our approach to Web Design, our methods continue to be proven in a
          continuously challenging marketplace with delivering what we promise.
        </p>
        <button className="learn-more-btn">
            <span>LEARN MORE</span></button>
      </div>
      <div className="blog-image">
        <img src={teamImage} alt="Team" />
      </div>
    </div>
  );
};

export default Blog;
