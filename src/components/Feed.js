import React from "react";
import "./css/Feed.css";
import InputOption from "./InputOption";

import { Avatar } from "@material-ui/core";
import me from "../components/css/assets/me.jpg";
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import PostAddIcon from '@material-ui/icons/PostAdd';

function Feed() {
  return (
    <div className="feed">
      <div className="feed-container">
        <form action="">
          <div className="feed-write">
            <Avatar src={me} className="feed-avatar" />
            <textarea rows="5" placeholder="What do you want to talk about?" />
          </div>
          <div className="feed-input">
            <InputOption Icon={PhotoSizeSelectActualOutlinedIcon} title="Photo" color="#70B4F8" />
            <InputOption Icon={YouTubeIcon} title="Video" color="#80C05E" />
            <InputOption Icon={TodayIcon} title="Event" color="#E7A33E" />
            <InputOption Icon={PostAddIcon} title="Write article" color="#FD9294" />
            <button className="publish">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feed;
