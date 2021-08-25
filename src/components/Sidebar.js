import React from "react";
import "./css/Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="" alt="cover" />
        <Avatar />
        <h2>Pearl Arora</h2>
        <h4>
          Vice President, Women In Coding Club, NCU | Team Editor, Rotaract Club
          of New Delhi
        </h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed your profile</p>
          <p className="sidebar-statNumber">66</p>
        </div>
        <div className="sidebar-stat">
          <p>Views of your post</p>
          <p className="sidebar-statNumber">222</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <h2>Recent</h2>
      </div>
    </div>
  );
}

export default Sidebar;
