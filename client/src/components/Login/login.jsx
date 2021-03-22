import React from "react";
import loginImg from "../../login.svg";
import loginImg2 from "../../Join.PNG";
import { Link } from "react-router-dom";
import { gapi } from 'gapi-script';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", room: "" };
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    console.log('this mounted')
    gapi.signin2.render('googleButton', {
      'scope': 'profile email',
      'width': 100,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn,
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    localStorage.setItem('bool', 'true');
  }

  onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log(id_token);
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: id_token })
    };

    fetch('http://localhost:5000/googlelogin', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.reply);
      });
  }

  googleLogout = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

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
              <input type="text" onChange={this.changeHandler} name="name" value={this.state.name} placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="roomname">Room Name</label>
              <input type="text" name="room" onChange={this.changeHandler} value={this.state.room} placeholder="roomname" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link onClick={e => (!this.state.name || !this.state.room) ? e.preventDefault() : this.login()} to={`/chat?name=${this.state.name}&room=${this.state.room}`}>
            <button className="btn" type="submit">
              Login
          </button>
          </Link>
          <div className="g-signin2" id="googleButton" data-onsuccess={this.onSignIn}></div>
          <button className="btn" onClick={this.googleLogout} type="submit">
              Logout
          </button>
        </div>
      </div>
    );
  }
}