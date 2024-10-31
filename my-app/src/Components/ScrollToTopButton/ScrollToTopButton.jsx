import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTopButton.css'; // Import your CSS file

// Inside your component
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      className={`scroll-to-top ${visible ? 'show' : ''}`} 
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

// Export and include the ScrollToTopButton in your main component
export default ScrollToTopButton;
