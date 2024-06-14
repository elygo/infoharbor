import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const MouseGradient = ({ children, className, refa }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const ref = useRef();
  const { x: mouseX, y: mouseY } = useMousePosition();

  const handleMouseMove = (event) => {
    const { left, top } = refa.current.getBoundingClientRect();
    const x = mouseX - left;
    const y = mouseY - top;
    const gradient = `radial-gradient(circle at ${x}px ${y}px,  ${theme === 'dark' ? '#2d1b5e 30%, #141726 80%' : '#e2d9fb 5%, white 50%'})`;
    refa.current.style.background = gradient;
  };

  useEffect(() => {
    handleMouseMove();
  }, [theme]);

  useEffect(() => {
    refa.current?.addEventListener('mousemove', handleMouseMove);
    return () => {
      refa.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={refa} className={className}>
      {children}
    </div>
  );
};

export default MouseGradient;
