import React from "react";
import "./Display.css";

const Display = () => {
  return (
    <div className="main">
      <div className="textarea">
        <textarea
          name=""
          id=""
          cols="110"
          rows="140"
          placeholder="Type @ to insert"
        ></textarea>
      </div>
    </div>
  );
};

export default Display;
