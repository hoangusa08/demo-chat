import { doc, onSnapshot, updateDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { db } from "../../firebase";
import "./chatheads.css";

export default function ChatHeaderItem({ receiver, user, setReceiver }) {
  let iconStyles = { color: "red", width: "1.5em", margin: "10px" };
  const [convention, setConvention] = useState({});

  useEffect(() => {
    if (!receiver || !user) return;

    let conversationId;
    if (receiver.uid > user.uid) conversationId = receiver.uid + ":" + user.uid;
    else conversationId = user.uid + ":" + receiver.uid;
    const unsub = onSnapshot(
      doc(db, "conversations", conversationId),
      (doc) => {
        const currentData = doc.data();
        if (currentData) setConvention(currentData);
        else setConvention({});
      }
    );

    return unsub;
  }, [receiver, user]);

  const readMessage = () => {
    console.log("abc");
    if (convention?.messages?.length > 0) {
      if (
        convention?.messages[convention?.messages?.length - 1]?.uid !==
          user?.uid &&
        convention.reciverHasRead === false
      ) {
        let conversationId;
        if (receiver.uid > user.uid)
          conversationId = receiver.uid + ":" + user.uid;
        else conversationId = user.uid + ":" + receiver.uid;

        const conversationRef = doc(db, `conversations/${conversationId}`);
        updateDoc(conversationRef, {
          ...convention,
          reciverHasRead: true,
        });
      }
    }
    setReceiver(receiver);
  };
  return (
    <div className="chat-head-item" onClick={ readMessage}>
      <div className="user-profile-pic-container">
        <p className="user-profile-pic-text">{receiver.email[0]}</p>
      </div>
      <p>{receiver.email}</p>
      {convention?.messages?.length > 0 ? (
        <div>
          {convention?.messages[convention?.messages?.length - 1]?.uid !==
            user?.uid && convention.reciverHasRead === false ? (
            <BiMessageDetail style={iconStyles} />
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
