import { Selector } from "antd-mobile";
import React from "react";

const SelectorChipsDefault = ({ options }) => {
  return (
    <Selector
      style={{
        "--border-radius": "100px",
        "--border": "solid transparent 1px",
        "--checked-border": "solid var(--adm-color-primary) 1px",
        "--padding": "8px 24px",
      }}
      showCheckMark={false}
      options={options}
      defaultValue={["1"]}
    />
  );
};

export default SelectorChipsDefault;
