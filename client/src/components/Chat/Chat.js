import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Redirect } from 'react-router-dom'


import { InfoBar } from '../InfoBar/InfoBar';
import { Input } from '../Input/Input';
import { Messages } from '../Messages/Messages';
import { TextContainer } from '../TextContainer/TextContainer'

import './Chat.css';

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://fierce-temple-65065.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    if(!name||!room){
      setRedirect(true);
    }
    
    setRoom(room);
    setName(name);

    socket = io(ENDPOINT);

    socket.emit('join', { name,room }, (error) => {
      if (error) {
        alert(error);
        setRedirect(true);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', mes => {
      setMessages(msgs => [...msgs, mes]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
      
    }
  }


  if (redirect) {
    return <Redirect push to="/" />;
  }


  return (
    <div className="outerContainer">
      <TextContainer users={users} />
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}