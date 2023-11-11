import React from "react";
import { Input } from "antd-mobile";

import "./style.css";

const InputDefault = ({ placeholder, value, onChange, type }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-default"
      type={type}
    />
  );
};

export default InputDefault;
