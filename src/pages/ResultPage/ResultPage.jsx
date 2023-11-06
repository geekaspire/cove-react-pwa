import React from "react";
import { Result } from "antd-mobile";
import { useNavigate, useParams } from "react-router-dom";

const ResultPage = ({ title, description }) => {
  const navigate = useNavigate();
  const { status } = useParams();
  if (status === "success") {
    title = "Ready to Get Started";
    description =
      "Great job! Your profile setup is complete. Start exploring, and discover cozy connections.";
  }
  setTimeout(function () {
    navigate("/");
  }, 3000); // 3000 milliseconds (3 seconds)
  return (
    <div
      className="cv-mobile-container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Result status={status} title={title} description={description} />
    </div>
  );
};

export default ResultPage;
