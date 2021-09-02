import React from "react";
import { useSelector } from "react-redux";

// Page Components
import "./css/HomeScreen.css";
import { selectUser } from "../features/userSlice";
import LandingPage from "./LandingPage";
import Signin from "./Signin";
import Signup from "./Signup";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

// Router
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

function HomeScreen() {
  const user = useSelector(selectUser);

  return (
    // <Router>
    //   <div className="home">
    //     {!user ? (
    //       <Routes />
    //     ) : (
    //       <div className="home-screen">
    //         <Header />
    //         <div className="page-body">
    //           <Sidebar />
    //           <Feed />
    //           <Widgets />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </Router>
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
