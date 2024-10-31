import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Ensure this path is correct

const CustomCursor = () => {
    const [cursorClass, setCursorClass] = useState('');

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = document.querySelector('.custom-cursor');
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseEnter = () => setCursorClass('hovering');
        const handleMouseLeave = () => setCursorClass('');

        document.querySelectorAll('.nav-items-container').forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });
        document.querySelectorAll('.sidemenu_btn').forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });


        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('.nav-item').forEach(item => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div className={`custom-cursor ${cursorClass}`}></div>;
};

export default CustomCursor;
