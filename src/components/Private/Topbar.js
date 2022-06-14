import React from "react";
import "./Topbar.css";
import { Notifications } from "@material-ui/icons";
import { Language } from "@material-ui/icons";
import { PowerSettingsNew } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h4 className="logo"> Espace_Administration </h4>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span classname="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span classname="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <PowerSettingsNew />
            <span classname="topIconBadge"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
