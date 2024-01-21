import React from "react";
import "./header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>COURSEHUB</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <i className="fa fa-facebook-f icon"></i>
            <i className="fa fa-instagram icon"></i>
            <i className="fa fa-twitter icon"></i>
            <i className="fa fa-youtube icon"></i>
            <i className="fa fa-user icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
