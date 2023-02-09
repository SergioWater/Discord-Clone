import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";

import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import SettingsIcon from '@material-ui/icons/Settings';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';

import { Avatar } from "@material-ui/core";
import { Mic } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Water Programmer</h3>
        <ExpandMoreIcon />
      </div>

      <div className="siderbar__channels">
        <div className="sidebar__channelsHeader">
          <div className="siderbar__header">
            <ExpandMoreIcon />
            <h4>Text Chaneels</h4>
          </div>

          <AddIcon className="siderbar__addChannel" />
        </div>

        <div className="siderbar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />

        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar/>
        <div className="sidebar__profileInfo">
          <h3>Sergio</h3>
          <p>#00000</p>
        </div>

        <div className="sidebar__profileIcons">
        <MicIcon/>
        <HeadsetIcon/>
        <SettingsIcon/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
