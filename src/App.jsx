// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import BottomTabs from "./components/BottomTabs/BottomTabs";

import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/Signup/Signup";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";
import SetupProfile from "./pages/SetupProfile/SetupProfile";
import ResultPage from "./pages/ResultPage/ResultPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RoommateDetailPage from "./pages/RoommateDetailPage/RoommateDetailPage";
import PropertyDetailPage from "./pages/PropertyDetailPage/PropertyDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ListingPage from "./pages/ListingPage/ListingPage";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/setup-profile" element={<SetupProfile />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/listing" element={<ListingPage />} />

          <Route path="/result/:status" element={<ResultPage />} />
          <Route path="/roommate/:id" element={<RoommateDetailPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
        <BottomTabs />
      </main>

      <SideDrawer />
    </>
  );
}

export default App;
