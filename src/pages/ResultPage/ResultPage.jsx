import React from "react";
import { Result } from "antd-mobile";
import { useNavigate, useParams } from "react-router-dom";
import SuccessIcon from "../../assets/images/animated/rocket.gif";

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
  }, 3000);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#fff",
        marginTop: "-50px",
      }}
    >
      <Result
        status={status}
        title={title}
        description={description}
        icon={
          <img src={SuccessIcon} alt="animated-gif" style={{ width: 60 }} />
        }
      />
    </div>
  );
};

export default ResultPage;
