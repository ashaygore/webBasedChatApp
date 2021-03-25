import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Live Chat
        <br />
        Application
      </h1>
      <h2>Project Developed By:
        <br />
        Batch eDac Sept20
      </h2>
      <h3>
        Akanksha, Ashay,<br />Shashank, Anoop
      </h3>
      <h4>
        Technologies Used:
        <br />
        React, Express,
        <br />
        Node, and Socket.io
      </h4>


    </div>
    {users ? (
      <div>
        <h2>Users chatting</h2>
        <div className='activeContainer'>

          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);