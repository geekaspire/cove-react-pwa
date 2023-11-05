import React, { useState } from "react";
import { ImageUploader } from "antd-mobile";
import { useNavigate } from "react-router-dom";

import { BiImageAdd } from "react-icons/bi";

import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

import "./style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  return (
    <div className="cv-mobile-container login-container">
      <div>
        <h4>
          Hello! <br />
          Signup to <br />
          get started
        </h4>
      </div>
      <div>
        <ImageUploader
          value={fileList}
          onChange={setFileList}
          upload={console.log("UPLOAD")}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#999999",
            }}
          >
            <BiImageAdd style={{ fontSize: 32 }} />
          </div>
        </ImageUploader>
      </div>
      <div>
        <InputDefault placeholder="Full name" />
        <InputDefault placeholder="Phone number" />
        <ButtonDefault title="Send code" />
        <p className="login-text">
          Already a Cove user?{" "}
          <span className="login-span" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
