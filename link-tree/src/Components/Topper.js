import React from "react";



// material ui components
import Avatar from "@mui/material/Avatar";




function Topper() {
  return (
    <div className="topper">
      <Avatar style={{ height: 50, width: 50, backgroundColor: "#cc5500" }} src="/wizard-icon.svg" className="avatar">
        
      </Avatar>
      <h2 className="Topper-name">Dylan Link Tree</h2>
      <hr style={{ width: "80%", color: "white" }}></hr>
    </div>
  );
}

export default Topper;
