// import { useState } from "react";
import { Button, SearchBar } from "antd-mobile";
import { BiUserCircle, BiMenuAltLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDefaultRoommate } from "../../store/reducers/global";

import "./style.css";

const HomeTopSection = () => {
  const dispatch = useDispatch();
  const isRoommateState = useSelector((state) => state.global.isRoommate);

  return (
    <div className="topsection-bg">
      <div className="topsection-inside cv-container">
        <div className="hts-wish-container">
          <div>
            <BiMenuAltLeft
              style={{
                fontSize: 26,
                color: "#f5f5f5",
              }}
            />
          </div>
          <div>
            <p className="hometopsection-wishing">Good Evening!</p>
          </div>
          <div className="hts-profile">
            <BiUserCircle
              style={{
                fontSize: 26,
                color: "#f5f5f5",
              }}
            />
          </div>
        </div>
        <div className="hometopsection-ations">
          <p className="hometopsection-p">
            Find Roommate <br />& Property
          </p>
          <div className="flex-center" style={{ gap: 20, marginTop: 14 }}>
            <Button
              className={
                !isRoommateState ? "hts-main-button-active" : "hts-main-button"
              }
              onClick={() => {
                dispatch(toggleDefaultRoommate(true));
              }}
            >
              Roommate
            </Button>
            <Button
              className={
                isRoommateState ? "hts-main-button-active" : "hts-main-button"
              }
              onClick={() => dispatch(toggleDefaultRoommate(false))}
            >
              Property
            </Button>
          </div>
          <div className="hts-search" style={{ marginTop: 20 }}>
            <SearchBar placeholder="Search here..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
