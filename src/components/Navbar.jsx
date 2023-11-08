import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/bookmarks")) {
      setActiveTab("Bookmarks");
    }
  }, []);
  return (
    <div className="p-6 px-16 font flex items-center justify-between">
      <Link to={"/"} onClick={() => setActiveTab("Home")}>
        <h2
          className={`text-xl cursor-pointer ${
            activeTab === "Home" ? "font-bold" : ""
          }`}
        >
          Home
        </h2>
      </Link>
      <Link to={"/bookmarks"} onClick={() => setActiveTab("Bookmarks")}>
        <h2
          className={`text-xl cursor-pointer ${
            activeTab === "Bookmarks" ? "font-bold" : ""
          }`}
        >
          Bookmarks
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
