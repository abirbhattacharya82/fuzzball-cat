import React from "react";
import './Chatbox.css';
function ChatBox(props) {
  return (
    <div className="ChatBox">
      <div className="Messages">
        {props.messages.map((message, index) => (
          <div key={index} className={message.role}>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
