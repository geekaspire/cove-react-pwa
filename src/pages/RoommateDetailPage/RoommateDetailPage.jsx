import React from "react";
import { Footer, NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";

import UserImage from "../../assets/images/user-pic-big.png";

import "./style.css";
import { BiCheckDouble } from "react-icons/bi";

const RoommateDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <NavBar
          style={{ position: "absolute", top: 15 }}
          onBack={() => navigate("/")}
        />
        <img
          src={UserImage}
          alt="user-pic"
          style={{ height: 354, width: "100%" }}
        />
      </div>
      <div className="rd-details">
        <div>
          <h4>Katrina Paul</h4>
          <p className="rd-details-age">Age: 24 | Gender: Female</p>
        </div>
        <div className="rd-details-info">
          <div>
            <p className="rd-details-small-title">About me</p>
            <p className="rd-details-info">Hindu, Job Holder</p>
            <p className="rd-details-info">Member since May 2022</p>
          </div>
          <div>
            <p className="rd-details-small-title">Languages</p>
            <p className="rd-details-info">English, Malayalam</p>
            <p className="rd-details-info">Location: Kerala</p>
          </div>
        </div>
        <div>
          <Footer label="Additional Information"> </Footer>
        </div>
        <div>
          <p className="rd-details-small-title">About me</p>
          <p className="rd-details-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div>
          <p className="rd-details-small-title">Habits and others</p>
          <div className="rd-habits">
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Social Smoker
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Social Drinker
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Partyholic
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Owns a pet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetailPage;
