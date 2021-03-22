import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom'

import {Message} from './Message/Message'

import './Messages.css';

export const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages" style={{ 
        backgroundImage: "url(./background_chat.jpg)" 
      }}>

        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
);