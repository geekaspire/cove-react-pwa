import React from "react";
import { Footer, NavBar, Swiper } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { BiCheckDouble } from "react-icons/bi";

import UserImage from "../../assets/images/user-pic-big.png";
import PropertyImage from "../../assets/images/image 5.png";

import "./style.css";

const PropertyDetailPage = () => {
  const navigate = useNavigate();

  const items = Array.from({ length: 2 }).map((color, index) => (
    <Swiper.Item key={index}>
      <div
        // className={styles.content}
        style={{ background: color }}
        // onClick={() => {
        //   Toast . show ( ` You clicked on the card ${ index + 1 } ` )
        // }}
      >
        {/* {index + 1} */}
        <img src={PropertyImage} alt="property-pic" style={{ width: "100%" }} />
      </div>
    </Swiper.Item>
  ));

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <Swiper autoplay> {items} </Swiper>
        <NavBar
          style={{ position: "absolute", top: 15 }}
          onBack={() => navigate("/")}
        />
        {/* <img
          src={UserImage}
          alt="user-pic"
          style={{ height: 354, width: "100%" }}
        /> */}
      </div>
      <div className="rd-details">
        <div>
          <h4>1 BHK Flat</h4>
          <p className="rd-details-age">Rs. 8000 / per month</p>
        </div>
        <div className="rd-details-info">
          <div>
            <p className="rd-details-small-title">1.2 km from Gwarko</p>
            <p className="rd-details-info">Mahalaxmi, Lalitpur</p>
            <p className="rd-details-info">0 Applied | 19 Views</p>
          </div>
          <div>
            <p className="rd-details-small-title">Available</p>
            <p className="rd-details-info">Owned By: Alok</p>
            <p
              className="rd-details-info"
              style={{ textDecoration: "underline" }}
            >
              View on Google Maps
            </p>
          </div>
        </div>
        <div>
          <Footer label="Additional Information"> </Footer>
        </div>
        <div>
          <p className="rd-details-small-title">Description</p>
          <p className="rd-details-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>
        <div>
          <p className="rd-details-small-title">Amenities</p>
          <div className="rd-habits">
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />2
              Bathroom
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Bikes and Car Parking
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              24/7 Water facility
            </p>
            <p className="rd-details-info">
              <BiCheckDouble style={{ marginRight: 3, color: "green" }} />
              Pet friendly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
