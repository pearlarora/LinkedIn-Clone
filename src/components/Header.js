import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Header() {
  return (
    <header>
      <div className="page-header">
        <div className="logo">
          <h1>Linked</h1>
          <svg
            stroke="currentColor"
            fill="#0E65C2"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
          </svg>
        </div>

        <div className="search">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="nav">
          <div className="nav-item">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="nav-item">
            <GroupIcon />
            <p>My Network</p>
          </div>
          <div className="nav-item">
            <WorkIcon />
            <p>Jobs</p>
          </div>
          <div className="nav-item">
            <MessageIcon />
            <p>Messaging</p>
          </div>
          <div className="nav-item">
            <NotificationsIcon />
            <p>Notifications</p>
          </div>
          <div className="nav-item">
            <div className="nav-profile"></div>
            <p>
              Me
              <ArrowDropDownIcon />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
