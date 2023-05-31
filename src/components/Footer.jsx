import React from 'react';
import { BsArrowUpCircleFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div>&copy; 2023 IndiHire.</div>
        <div className="cursor-pointer" onClick={scrollToTop}>
          <BsArrowUpCircleFill style={{ fontSize:'25px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
