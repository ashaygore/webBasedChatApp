import React from "react";
import loginImg from "../../login.svg";
// import loginImg2 from "../../Join.PNG";
import { Link } from "react-router-dom";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", room: "" };
  }


  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })


  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        {/* <div className="image1"> <img src={loginImg2} /></div> */}
        <div className="content">
          <div className="image2">
            <img src={loginImg} />
          </div>
          <div className="header">ASAA MESSANGER</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input type="text" onChange={this.changeHandler} name="name" value={this.state.name} placeholder="username" />
            </div>
            <div className="form-group2">
              <label htmlFor="roomname">RoomName</label>
              <input type="text" name="room" onChange={this.changeHandler} value={this.state.room} placeholder="roomname" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Link onClick={e => (!this.state.name || !this.state.room) ? e.preventDefault() : null} to={`/chat?name=${this.state.name}&room=${this.state.room}`}>
          <button className="btn" type="submit">
            JOIN
          </button>
          </Link>
        </div>
      </div>
    );
  }
}