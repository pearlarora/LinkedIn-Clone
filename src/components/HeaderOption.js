import React from "react";
import "./css/HeaderOption.css";

import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="nav-item">
      {avatar && <Avatar className="nav-avatar" src={avatar} />}
      {Icon && <Icon className="nav-icon" />}
      <p className="nav-title">{title}</p>
    </div>
  );
}

export default HeaderOption;
