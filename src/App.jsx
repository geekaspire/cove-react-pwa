// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BiDownload } from "react-icons/bi";

import BottomTabs from "./components/BottomTabs/BottomTabs";

import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/Signup/Signup";

import "./App.css";

function App() {
  let deferredPrompt = null;
  const installPWA = () => {
    if ("serviceWorker" in navigator && "serviceWorker" in window) {
      window.addEventListener("beforeinstallprompt", (event) => {
        // Prevent the default installation prompt
        event.preventDefault();
        deferredPrompt = event;

        // Show a custom install prompt
        if (window.confirm("Install this app?")) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              console.log("PWA installed");
            }
            deferredPrompt = null;
          });
        }
      });
    }
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <BottomTabs />
      <div className="floating-button">
        <button className="fab-button" onClick={installPWA}>
          <BiDownload />
        </button>
      </div>
    </>
  );
}

export default App;
