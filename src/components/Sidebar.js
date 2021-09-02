import React from "react";
import "./css/Sidebar.css";

import { Avatar } from "@material-ui/core";
import me from "../components/css/assets/me.jpg";

function Sidebar() {
  const topics = ["reactjs", "javascript", "bootstrap", "css3", "html5"];

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="recentItem-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          alt="cover"
        />
        <Avatar className="sidebar-avatar" src={me} />
        <h2>Pearl Arora</h2>
        <p>Student, The NorthCap University</p>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <h4>Who viewed your profile</h4>
          <p className="sidebar-statNumber">66</p>
        </div>
        <div className="sidebar-stat">
          <h4>Views of your post</h4>
          <p className="sidebar-statNumber">222</p>
        </div>
      </div>

      <div className="sidebar-bottom feed-container">
        <h3>Recent</h3>
        {topics.map((topic) => recentItem(topic))}
      </div>
    </div>
  );
}

export default Sidebar;
