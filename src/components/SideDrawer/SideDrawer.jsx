import React from "react";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../store/reducers/global";
import {
  BiInfoCircle,
  BiCheckShield,
  BiMessageSquareEdit,
  BiLogOutCircle,
} from "react-icons/bi";

import AppIcon from "../../assets/images/cove-white.png";

import "react-modern-drawer/dist/index.css";
import "./style.css";
import { Footer } from "antd-mobile";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.global.isOpenSidebar);

  const toggleDrawer = () => {
    dispatch(toggleSideBar(!isOpen));
  };

  const items = [
    { title: "About us", icon: <BiInfoCircle style={{ fontSize: 19 }} /> },
    { title: "Security", icon: <BiCheckShield style={{ fontSize: 19 }} /> },
    { title: "Terms of use", icon: <BiMessageSquareEdit /> },
    { title: "Privacy Policy", icon: <BiMessageSquareEdit /> },
    { title: "Refund Policy", icon: <BiMessageSquareEdit /> },
    { title: "Signout   ", icon: <BiLogOutCircle style={{ fontSize: 19 }} /> },
  ];

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="sd-container"
      >
        <div className="flex-center">
          <img src={AppIcon} alt="app-logo" className="sd-logo" />
        </div>
        <ul>
          {items.map((ele, i) => (
            <li key={i + ele}>
              <div className="sd-items">
                <span>{ele.icon}</span>
                <p>{ele.title}</p>
              </div>
            </li>
          ))}
        </ul>
        <Footer label="App info"> </Footer>
        <div
          style={{
            textAlign: "center",
            padding: 10,
          }}
        >
          <p style={{ color: "#ababab" }}>App Version: 1.0.0</p>
          <Footer content="© 2024 Geekaspire Innotech PVT LTD"></Footer>
        </div>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
