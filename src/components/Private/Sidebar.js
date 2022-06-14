import React from "react";
import { LineStyle } from "@material-ui/icons";
import { Timeline } from "@material-ui/icons";
import { Forum } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { Group } from "@material-ui/icons";
import { SettingsOutlined } from "@material-ui/icons";
import { Event } from "@material-ui/icons";
import { PostAdd } from "@material-ui/icons";
import { PermContactCalendarOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="container">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <LineStyle /> Home
              </li>
              <li className="sidebarListItem">
                <MailOutline /> Email
              </li>
              <li className="sidebarListItem">
                <Forum /> Messages
              </li>
            </ul>
          </div>
          <h3 className="sidebarTitle">Dashbord</h3>
          <ul className="sidebarList">
            <Link to="/HomeDash">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" /> Analytic
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Reports
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Users_Analytic
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Réglage </h3>
          <ul className="sidebarList">
            <Link to="/User">
              <li className="sidebarListItem">
                <PermContactCalendarOutlined className="sidebarIcon" />
                Edit_Users
              </li>
            </Link>
            <Link to="/UpdateCompte">
              <li className="sidebarListItem">
                <PostAdd className="sidebarIcon" /> Add_Patients
              </li>
            </Link>

            <Link to="/addUser">
              <li className="sidebarListItem">
                <SettingsOutlined className="sidebarIcon" /> Add
              </li>
            </Link>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" /> calendrier
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
