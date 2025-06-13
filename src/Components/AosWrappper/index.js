// AOSWrapper.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,      
    });
  }, []);

  return <div>{children}</div>;
};

export default AosWrapper;
