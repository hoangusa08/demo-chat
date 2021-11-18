import React from "react";

import { FaEdit, FaEllipsisH, FaVideo } from "react-icons/fa";
import ChatHeaderItem from "./ChatHeaderItem";
import "./chatheads.css";

export default React.memo(function useChatHeads({ items, setReceiver, user }) {
  return (
    <div>
      <div className="conv-header-container">
        <p className="conversations-header">Conversations</p>
        <div>
          <FaEllipsisH />
          <FaVideo />
          <FaEdit />
        </div>
      </div>
      <input className="chat-heads-search" placeholder="Search in Messenger" />
      <div className="chat-heads-container">
        {items.map((obj, i) => (
          <ChatHeaderItem
            receiver={obj}
            user={user}
            setReceiver={setReceiver}
            key={i}
          />
        ))}
      </div>
    </div>
  );
});
