import React, { useState } from "react";
import "./css/Feed.css";
import PostOption from "./PostOption";
import Post from "./Post";

// Material UI
import { Avatar, Divider } from "@material-ui/core";
import me from "../components/css/assets/me.jpg";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TodayIcon from "@material-ui/icons/Today";
import PostAddIcon from "@material-ui/icons/PostAdd";

function Feed() {
  const [posts, setPosts] = useState([]);

  const publishPost = event => {
    event.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed-container">
        <form action="">
          <div className="feed-write">
            <Avatar src={me} className="feed-avatar" />
            <textarea rows="5" placeholder="What do you want to talk about?" />
          </div>

          <Divider />

          <div className="feed-option">
            <PostOption
              Icon={PhotoSizeSelectActualOutlinedIcon}
              title="Photo"
              color="#70B4F8"
            />
            <PostOption Icon={YouTubeIcon} title="Video" color="#80C05E" />
            <PostOption Icon={TodayIcon} title="Event" color="#E7A33E" />
            <PostOption
              Icon={PostAddIcon}
              title="Write article"
              color="#FD9294"
            />
            <button onClick={publishPost} type="submit" className="publish">Publish</button>
          </div>
        </form>
      </div>

      <div className="feed-container">
        <Post
          avatar={me}
          name="Pearl Arora"
          desc="This is a test desc"
          msg="This is a test msg"
          photoUrl="https://www.lotus-qa.com/wp-content/uploads/2020/02/testing.jpg"
        />
      </div>
    </div>
  );
}

export default Feed;
