import React from "react";


export class Register extends React.Component {
  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header2">Welcome to Chat App</div>
        <div className="inst1">
            <div className="inst1subheader">Join, Chat & Leave No Trace Behind</div>
              <div>
                <ul className="topic">
                <li>Talk to friends</li>
                <li>Easy way to group chat</li>
                <li>Online chat without registration</li>
              </ul>
              </div>
              <div className="directions">
                 Directions to use: <br/>
                <br />1. User can join a chatroom by entering the UserName and RoomName.
                <br />2. User can exit the room by clicking on the exit button.
                <br />3. User can chat publicly with the other connected users.
                <br />4. Don't refresh your chat otherwise messages will disappear.
              </div>
          </div>
          
      </div>
    );
  }
}