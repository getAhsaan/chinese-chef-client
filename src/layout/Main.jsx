import React from "react";
import Navbar from "../pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div className="bg-base-200">
      <Footer />
      </div>
    </div>
  );
};

export default Main;
