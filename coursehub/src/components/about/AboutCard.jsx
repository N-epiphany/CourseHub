import React from "react";
import { homeAbout } from "../../dummydata";
import Heading from "../common/heading/Heading";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about2bg.png" />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
