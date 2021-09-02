import React from "react";
import "./css/Widgets.css";

// Material UI
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

function Widgets() {
  const newsArticle = (heading, details) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordTwoToneIcon style={{fontSize: "medium", padding: "3.5px"}} />
      </div>
      <div className="widgets-articleRight">
        <h3>{heading}</h3>
        <p>{details}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="feed-container widgets-container">
        <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <InfoIcon style={{color: "grey"}} />
        </div>
        {newsArticle("Heading", "details")}
        {newsArticle("Heading", "details")}
        {newsArticle("Heading", "details")}
        {newsArticle("Heading", "details")}
        {newsArticle("Heading", "details")}
      </div>
    </div>
  );
}

export default Widgets;
