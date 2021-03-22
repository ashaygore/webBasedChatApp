import React from 'react';

import ReactEmoji from 'react-emoji'

import './Message.css';
function getFormattedDate() {
    var date = new Date();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();


    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str =  hour + ":" + min + ":" + sec;

    /*alert(str);*/

    return str;
}

export const Message = ({message: { user, text }, name}) => {
    let isSentByCurrentUser = false;
    
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
    isSentByCurrentUser
    ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <p className="sentText pl-10">{getFormattedDate()}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>

            </div>
        </div>
    )
    : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
                
            </div>
            <p className="sentText pl-10">{getFormattedDate()}</p>
            <p className="sentText pl-10">{user}</p>  
        </div>
    ) 
    )

};