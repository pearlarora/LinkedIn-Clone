import React, { useState, useEffect } from "react";
import "./css/Feed.css";
import PostOption from "./PostOption";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase";

// Material UI
import { Avatar, Divider } from "@material-ui/core";
import me from "../components/css/assets/me.jpg";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TodayIcon from "@material-ui/icons/Today";
import PostAddIcon from "@material-ui/icons/PostAdd";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const publishPost = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      name: "Name",
      desc: "This is the desc.",
      msg: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-container">
        <form action="">
          <div className="feed-write">
            <Avatar src={me} className="feed-avatar" />
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows="5"
              placeholder="What do you want to talk about?"
            />
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
            <button onClick={publishPost} type="submit" className="publish">
              Publish
            </button>
          </div>
        </form>
      </div>

      <div className="posts-container">
        {posts.map(({ id, data: { name, desc, msg, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            desc={desc}
            msg={msg}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
