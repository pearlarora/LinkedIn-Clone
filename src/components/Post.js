import React from "react";
import "./css/Post.css";
import PostOption from "./PostOption";

// Material UI
import { Avatar, Divider } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

function Post({ avatar, name, desc, msg, photoUrl }) {
  return (
    <div className="feed-post">
      <div className="post-header">
        <Avatar src={avatar} className="feed-avatar" />
        <div className="postHeader-info">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{msg}</p>
        {photoUrl && <img src={photoUrl} alt="post" />}
      </div>
      <Divider />

      <div className="feed-option post-option">
        <div className="post-review">
          <PostOption Icon={ThumbUpOutlinedIcon} title="Like" color="#6E6E6E" />
          <PostOption Icon={ChatOutlinedIcon} title="Comment" color="#6E6E6E" />
          <PostOption
            Icon={ShareIcon}
            title="Share"
            color="#6E6E6E"
          />
        </div>
        <PostOption
          Icon={BookmarkBorderOutlinedIcon}
          title="Save"
          color="#6E6E6E"
        />
      </div>
    </div>
  );
}

export default Post;
