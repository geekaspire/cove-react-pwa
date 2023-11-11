// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import BottomTabs from "./components/BottomTabs/BottomTabs";

import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/Signup/Signup";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";
import SetupProfile from "./pages/SetupProfile/SetupProfile";
import ResultPage from "./pages/ResultPage/ResultPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RoommateDetailPage from "./pages/RoommateDetailPage/RoommateDetailPage";
import PropertyDetailPage from "./pages/PropertyDetailPage/PropertyDetailPage";

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/setup-profile" element={<SetupProfile />} />
          <Route path="/result/:status" element={<ResultPage />} />
          <Route path="/roommate/:id" element={<RoommateDetailPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
        <BottomTabs />
      </main>
    </>
  );
}

export default App;
