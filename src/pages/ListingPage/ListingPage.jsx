import { NavBar } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";

const ListingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="cv-mobile-container">
      <div>
        <NavBar onBack={() => navigate("/")}> Room Listings </NavBar>
      </div>
    </div>
  );
};

export default ListingPage;
