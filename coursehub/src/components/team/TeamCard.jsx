import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i className="fa fa-facebook-f icon"></i>
              <i className="fa fa-instagram icon"></i>
              <i className="fa fa-twitter icon"></i>
            </div>
          </div>
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
