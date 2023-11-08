// import React from 'react'

import { BiHeart, BiHomeAlt2, BiMessageRounded, BiPlus } from "react-icons/bi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { BottomNavigation } from "reactjs-bottom-navigation";
import { useEffect, useState } from "react";

import "./style.css";

const BottomTabs = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("PWA installed");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const tabs = [
    { key: "home", icon: <BiHomeAlt2 style={{ fontSize: 18 }} /> },
    { key: "saved", icon: <BiHeart style={{ fontSize: 18 }} /> },
    { key: "add", icon: <BiPlus style={{ fontSize: 22 }} /> },
    { key: "message", icon: <BiMessageRounded style={{ fontSize: 18 }} /> },
    {
      key: "install",
      icon: (
        <LuMonitorSmartphone
          style={{ fontSize: 20 }}
          onClick={handleInstallClick}
        />
      ),
    },
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
