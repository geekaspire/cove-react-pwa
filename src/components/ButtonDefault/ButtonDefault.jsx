import React from "react";
import { Button } from "antd-mobile";

import "./style.css";

const ButtonDefault = ({ title, onClick }) => {
  return (
    <Button className="button-default" onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonDefault;
