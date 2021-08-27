import React from "react";
import "./css/Feed.css";
import Popup from "./Popup";

import { Avatar } from "@material-ui/core";
import me from "../components/css/assets/me.jpg";

function Feed() {
  return (
    <div className="feed">
      <div className="start-post">
        <Avatar src={me} className="startPost-avatar" />
        <button>Start a post</button>
      </div>
      <div className="startPost-popup">
        <Popup trigger={true}>
          <h1>popup triggered</h1>
        </Popup>
      </div>
    </div>
  );
}

export default Feed;
