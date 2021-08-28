import React from "react";
import "./css/PostOption.css"

function PostOption({ Icon, title, color }) {
  return (
    <div className="input-option">
      <div className="option-item">
        {Icon && <Icon src={Icon} style={{ color: color, fontSize: "26px" }} />}
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default PostOption;
