import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/logout_icon.png';

import './InfoBar.css';

export const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/" onClick={()=>{localStorage.setItem('bool','false')}}><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);