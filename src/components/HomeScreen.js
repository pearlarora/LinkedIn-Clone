import React from "react";
import "./css/HomeScreen.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Header />
      <div className="page-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default HomeScreen;
