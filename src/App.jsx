import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";



export default function App() {
  return (
    <div className="h-screen bg-gray-100 flex  items-center justify-center">
      <div className="w-[375px] h-[800px] md:h-[730px] bg-white  shadow-lg overflow-hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Toaster position="top-center" />

      </div>
    </div>
  );
}
