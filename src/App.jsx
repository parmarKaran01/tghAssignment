import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Bookmark from "./Pages/Bookmark";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-r from-[#5E2AB2] to-[#161E6C] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmark />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
