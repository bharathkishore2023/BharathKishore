import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title" style={{textAlign:"center"}}>Kishore</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#home" className="footer__link">
             Profile
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://wa.me/919360577633?text=Hello%20Bk!"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a
            href="https://instagram.com/inimai_tamizhan"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i class='bx bxl-instagram'></i>
          </a>

          <a
            href="https://telegram.me/Inimaitamizhan"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169;Bharath Kishore. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
