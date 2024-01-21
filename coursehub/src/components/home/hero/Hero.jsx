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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              voluptatibus tenetur minima ipsum ullam ad aspernatur veritatis
              ipsam voluptatem, possimus odio, fugit iusto odit, quia ea debitis
              quaerat magni deleniti.
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
