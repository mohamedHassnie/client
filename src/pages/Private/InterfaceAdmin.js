import React from "react";
import "./style/InterfaceAdmin.css";
import Topbar from "../../components/Private/Topbar.js";
import Sidebar from "../../components/Private/Sidebar.js";

import HomeVue from "./HomeVue";
export default function InterfaceAdmin() {
  return (
    <div>
      <Topbar />
      <div className="aa">
        <Sidebar />

        <HomeVue />
        <div className="others"></div>
      </div>
    </div>
  );
}
