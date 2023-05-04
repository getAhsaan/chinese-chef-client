import React from "react";
import Navbar from "../pages/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import ScrollToTopFix from "../components/ScrollToTopFix";

const Main = () => {
  return (
    <div>
      <ScrollToTopFix />
      <Navbar />
      <Outlet />
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
