import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO COURSEHUB"
              title="ONLINE EDUCATION & LEARNING"
            />
            <p>
              Welcome to CourseHub, your gateway to a world of limitless
              learning opportunities. Explore online education like never
              before, where knowledge knows no bounds.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-arrow-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"> </div>
    </>
  );
};

export default Hero;
