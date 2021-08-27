import React from "react";
import "./css/Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button>Close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
