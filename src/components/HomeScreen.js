import React from "react";
import "./css/HomeScreen.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Header />
      <div className="page-body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default HomeScreen;
