// import React from "react";
import { Card } from "antd-mobile";
import { BiMap, BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import ProfilePic from "../../assets/images/demo-profile.png";

import "./style.css";

const RoommateCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="rommmate-card">
      <div className="rc-details">
        <div onClick={() => navigate("/roommate/id")}>
          <img src={ProfilePic} alt="user-profile" className="rc-profile" />
        </div>
        <div
          className="rc-details-info"
          onClick={() => navigate("/roommate/id")}
        >
          <h4>Alex Dab</h4>
          <p className="rc-details-place">Bangalore, KA</p>
          <p className="rc-details-price">
            Rs. 29999 <span className="rc-details-span">/ month</span>
          </p>
          <p className="rc-details-nearby">
            <BiMap />
            <span>1.2 km from Lulu mall</span>
          </p>
        </div>
        <div className="rc-details-dots">
          <BiDotsVerticalRounded />
        </div>
      </div>
    </Card>
  );
};

export default RoommateCard;
