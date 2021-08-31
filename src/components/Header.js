import React from "react";
import "./css/Header.css";
import HeaderOption from "./HeaderOption";
import me from "../components/css/assets/me.jpg";

// Material UI
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <header>
      <div className="page-header">
        <div className="logo">
          <h1>Linked</h1>
          <LinkedInIcon className="logo-icon" />
        </div>

        <div className="search">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="nav">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={GroupIcon} title="My&nbsp;Network" />
          <HeaderOption Icon={WorkIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={me} title="Me" />
        </div>
      </div>
    </header>
  );
}

export default Header;
