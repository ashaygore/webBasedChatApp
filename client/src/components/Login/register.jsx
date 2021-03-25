import React from "react";
import loginImg from "../../instructions.PNG";

export class Register extends React.Component {
 

  render() {
    return (
      <div className="base-container">
        <div className="header">Welcome to Chat App</div>
        <div className="content">
          <div className="image2">
            <img src={loginImg} alt='No-Value'/>
          </div>
          <p > <b>To Create a New Room</b></p>
          <ul>
            <li>Enter Your Name.</li>
            <li>Enter a room name of your choice</li>
            <li>Click on Join button</li>
            <li>To invite your friends, share this roomname with them.</li>
          </ul>
          <p><b>To Join an Existing Room</b></p>
          <ul>
            <li>Enter Your Name.</li>
            <li>Enter the roomname you want to join</li>
            <li>Click on Join button</li>
          </ul>
        </div>
      </div>
    );
  }
}