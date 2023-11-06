import React from "react";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import DropDownDefault from "../../components/DropDownDefault/DropDownDefault";
import { Genders } from "../../utils/ResuableData";
import CalendarDefault from "../../components/CalendarDefault/CalendarDefault";

const SetupProfile = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cv-mobile-container login-container"
      style={{ gap: 30, marginTop: 120 }}
    >
      <div>
        <h4>
          <span className="verify-span">Setup your</span> <br />
          Profile
        </h4>
      </div>

      <div className="login-inputs">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <InputDefault placeholder="Email address" />
          <DropDownDefault items={Genders} title="Gender" />
          <CalendarDefault />
          <InputDefault placeholder="Location" />
          <InputDefault placeholder="Occupancy" />
        </div>
        <ButtonDefault
          title="Confirm"
          onClick={() => navigate("/result/success")}
        />
        <p className="login-hint">Gender is used to filter your roommate.</p>
      </div>
    </div>
  );
};

export default SetupProfile;
