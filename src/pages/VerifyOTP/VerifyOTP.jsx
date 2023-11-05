import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

import ProfilePicture from "../../assets/images/demo-profile.png";

import "./style.css";

const VerifyOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="cv-mobile-container login-container" style={{ gap: 30 }}>
      <div>
        <h4>
          <span className="verify-span">Welcome,</span> <br />
          Emma
        </h4>
      </div>
      <div>
        <img
          src={ProfilePicture}
          alt="profile-pic"
          className="verify-picture"
        />
      </div>
      <div className="login-inputs">
        <div>
          <p className="login-hint">
            Please enter the OTP we’ve sent to your number.
          </p>
          <InputDefault placeholder="OTP" />
        </div>
        <ButtonDefault
          title="Confirm"
          onClick={() => navigate("/verify-otp")}
        />
        <p className="login-text">
          What a surprise, no OTP?{" "}
          <span className="login-span" onClick={() => navigate("/login")}>
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
