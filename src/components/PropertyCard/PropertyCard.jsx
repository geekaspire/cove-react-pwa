import React from "react";
import { Card } from "antd-mobile";
import { BiDotsVerticalRounded, BiMap, BiSolidCircle } from "react-icons/bi";

import PropertyImage from "../../assets/images/property-image.png";
import { useNavigate } from "react-router-dom";

import "./style.css";

const PropertyCard = () => {
  const navigate = useNavigate();
  return (
    <Card className="property-card" onClick={() => navigate("/property/id")}>
      <div>
        <img src={PropertyImage} alt="Property-img" className="pc-profile" />
      </div>
      <div className="pc-price-details">
        <div className="pc-details">
          <span className="pc-details-place">Mahalaxmi, Lalitpur</span>
          <h4>1 Big Hall at Lalitpur</h4>
          <p className="pc-details-nearby">
            <BiMap />
            <span>1.2 km from Lulu mall</span>
          </p>
        </div>
        <div className="pc-details-price">
          <p className="rc-details-price">
            Rs. 29999 <span className="rc-details-span">/ month</span>
          </p>
          <p className="pc-details-applied">9 Applied | 19 Views</p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="pc-avai"
          >
            <BiSolidCircle
              style={{ color: "#68c3a3", marginRight: 3, fontSize: 8 }}
            />
            <span>Available</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
