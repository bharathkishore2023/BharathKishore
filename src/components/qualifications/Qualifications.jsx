import React from "react";
import "./qualifications.css";

const Qualifications = () => {

  return (
    <section className="qual section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Education</span>

      <div className="qual__container container">
        <div className="qual__sections">
          <div
            className="qual__content"
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  B.E. CSE
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                  K.S.R. College of Engineering
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  8.2 CGPA
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - Present
                </div>
                
              </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>

              <div>
                <h3 className="qual__title">
                  HSC
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                  DE Britto Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  77.5%
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            <div className="qual__data">
                <h3 className="qual__title">
                   SSLC
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                DE Britto Higher Secondary School
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  96%
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2017
                </div>
              </div> 
              </div>
      </div>
    </section>
  );
};

export default Qualifications;
