import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="mx-4 p-4 border border-black h-[705px] bg-gray-50 rounded-md">
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
      <ChatMessage name={"Tyrion"} message="I drink and I know things 🍷" />
    </div>
  );
};

export default LiveChat;
