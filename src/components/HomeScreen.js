import React from "react";
import "./css/HomeScreen.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Header />
      <div className="page-body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default HomeScreen;
