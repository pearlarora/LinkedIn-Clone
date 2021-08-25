import React from "react";
import "./css/HomeScreen.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Header />
      <Sidebar />
    </div>
  );
}

export default HomeScreen;
