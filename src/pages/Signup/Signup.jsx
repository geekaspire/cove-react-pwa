import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import { BiImageAdd } from "react-icons/bi";

import InputDefault from "../../components/InputDefault/InputDefault";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

import SelectorChipsDefault from "../../components/SelectorChipsDefault/SelectorChipsDefault";
import { UserTypes } from "../../utils/ResuableData";

import "./style.css";
import { Constants } from "../../utils/Constants";

const Signup = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    lookingFor: "",
    profilePicture: "",
  });

  const [base64Image, setBase64Image] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the base64 representation of the image to state
        setBase64Image(reader.result);
        setFormData({ ...formData, profilePicture: reader.result });
      };

      // Read the selected file as a data URL (base64)
      reader.readAsDataURL(file);
    }
  };

  const signupHandle = () => {
    Axios.post(
      `${Constants.API_BASE_URL}/user/signup`,
      formData,
      Constants.API_CONFIG
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(fileList);

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
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {base64Image && (
            <div>
              <p>Base64 Image:</p>
              <img
                src={base64Image}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
        {/* <ImageUploader
          value={fileList}
          onChange={setFileList}
          upload={(e) => setFileList([{ url: e }])}
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
            <BiImageAdd style={{ fontSize: 40 }} />
          </div>
        </ImageUploader> */}
      </div>
      <div className="login-inputs">
        <InputDefault
          placeholder="Full name"
          onChange={(e) => setFormData({ ...formData, name: e })}
          value={formData.name}
        />
        <InputDefault
          placeholder="Phone number"
          onChange={(e) => setFormData({ ...formData, phone: e })}
          value={formData.phone}
        />
        <InputDefault
          placeholder="Password"
          type="password"
          onChange={(e) => setFormData({ ...formData, password: e })}
          value={formData.password}
        />
        <div>
          <p
            style={{
              color: "#666",
              fontWeight: 500,
              marginBottom: 6,
              fontSize: 14,
            }}
          >
            What are you looking for?
          </p>
          <SelectorChipsDefault
            options={UserTypes}
            onChange={(e) => setFormData({ ...formData, lookingFor: e[0] })}
          />
        </div>
        <ButtonDefault title="Send code" onClick={() => signupHandle()} />
        <p className="login-text">
          Already a Cove user?{" "}
          <span className="login-span alink" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
