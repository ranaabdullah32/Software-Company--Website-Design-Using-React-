import React, { useEffect, useState } from 'react';
import './Preloader.css';
import favicon from '../../Images/favicon.png';

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!loading) return null; // Remove preloader after loading is false

  return (
    <div className="preloader-overlay">
      <div className="preloader-circle">
        <div className="circle-background"></div> 
        <div className="circle-moving"></div> {/* Rotating border */}
      </div>
      <img src={favicon} alt="Company Logo" className="preloader-logo" />
    </div>
  );
}

export default Preloader;
