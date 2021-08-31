import React from "react";
import { useSelector } from "react-redux";

import "./css/HomeScreen.css";
import { selectUser } from "../features/userSlice";
import LandingPage from "./LandingPage";
import Signin from "./Signin";
import Signup from "./Signup";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function HomeScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="home">
      {!user ? (
        <LandingPage />
      ) : (
        <div className="home-screen">
          <Header />
          <div className="page-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
