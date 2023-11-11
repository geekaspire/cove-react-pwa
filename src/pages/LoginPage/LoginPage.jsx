import React from "react";
import InputDefault from "../../components/InputDefault/InputDefault";
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="cv-mobile-container login-container">
      <div>
        <h4>
          Hello again! <br />
          Welcome <br />
          back
        </h4>
      </div>

      <div className="login-inputs">
        <InputDefault placeholder="Phone number" />
        <InputDefault placeholder="Password" type="password" />
        <ButtonDefault
          title="Send code"
          onClick={() => navigate("/verify-otp")}
        />
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

export default LoginPage;
