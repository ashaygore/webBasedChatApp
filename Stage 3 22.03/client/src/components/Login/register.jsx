import React from "react";
// import loginImg from "../../instructions.PNG";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header2">Welcome to Chat App</div>
        
          {/* <div className="image2"> */}
            {/* <img src={loginImg} />
          </div> */}
          <div className="inst1">


          Directions to use:

<br/>1. User can join a chatroom by entering the username and roomname.
<br/>2. New room can be created by entering username and roomname.
<br/>3. User can exit the room by clicking on the exit button.
<br/>4. User can chat publicly among the other connected users.
          </div>
          
          
            
          
        </div>
        
      
    );
  }
}