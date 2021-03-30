import React from 'react';

import ReactEmoji from 'react-emoji'

import './Message.css';

export const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    
    const trimmedName = name.trim().toLowerCase()
    
    let x=text;
     x=x.split(" ");
    
    let y=x.splice(x.length-1,1);
    let str=x[0];
    for (let z=1;z<x.length;z++){
        str+=" "+x[z];
    }
    
	
    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
    isSentByCurrentUser
    ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{str}<br />{y}</p>
               
            </div>
        </div>
    )
    : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
            </div>
            <p className="sentText pl-10">{user}</p>
        </div>
    ) 
    )

};
