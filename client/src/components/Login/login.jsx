import React from "react";
import loginImg from "../../login.svg";
import loginImg2 from "../../Join.PNG";
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
          <div className="header">ASAA Messenger</div>
        <div className="image1"> <img src={loginImg2} /></div>
        <div className="content">
          <div className="image2">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="roomname">Room Name</label>
              <input type="text" name="roomname" placeholder="roomname" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}