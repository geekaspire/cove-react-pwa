// import React from 'react'

import { BiHeart, BiHomeAlt2, BiMessageRounded, BiPlus } from "react-icons/bi";
import { BottomNavigation } from "reactjs-bottom-navigation";

import "./style.css";

const BottomTabs = () => {
  const tabs = [
    { key: "home", icon: <BiHomeAlt2 style={{ fontSize: 18 }} /> },
    { key: "saved", icon: <BiHeart style={{ fontSize: 18 }} /> },
    { key: "add", icon: <BiPlus style={{ fontSize: 22 }} /> },
    { key: "message", icon: <BiMessageRounded style={{ fontSize: 18 }} /> },
  ];
  return (
    <div>
      <BottomNavigation
        items={tabs}
        selected={0}
        onItemClick={(item) => console.log(item)}
        activeBgColor="#ff4b3a"
        activeTextColor="white"
      />
    </div>
  );
};

export default BottomTabs;