import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners
        window.addEventListener('mousemove', moveCursor);
        const interactiveElements = document.querySelectorAll('a, button, .nav-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup listeners
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CustomCursor;
