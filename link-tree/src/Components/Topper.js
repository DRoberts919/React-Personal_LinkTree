import React from "react";

// material ui components
import Avatar from "@mui/material/Avatar";

function Topper() {
  return (
    <div className="topper">
      <Avatar style={{ height: 100, width: 100 }} className="avatar">
        N
      </Avatar>
      <hr style={{ width: "80%", color: "white" }}></hr>
    </div>
  );
}

export default Topper;
