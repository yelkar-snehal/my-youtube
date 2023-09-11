import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomInt } from "./../utils/utils";

const LiveChat = () => {
  const disptach = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      let messages = [];
      // actual fetch call here to poll
      // console.log("API polling");
      fetch(`https://api.gameofthronesquotes.xyz/v1/random/${getRandomInt(5)}`)
        .then((response) => response.json())
        .then((responseData) => {
          if (!Array.isArray(responseData)) {
            disptach(
              addMessage({
                name: responseData.character.name,
                message: responseData.sentence,
              })
            );
          } else {
            messages = responseData.map((res) => ({
              name: res.character.name,
              message: res.sentence,
            }));
            disptach(addMessage(...messages));
          }
        });
    }, 10000);
    return () => clearInterval(interval);
  }, [disptach]);

  return (
    <div className="mx-4 p-4 border border-black h-[705px] bg-gray-50 rounded-md overflow-y-scroll flex flex-col-reverse">
      {!chatMessages?.length
        ? null
        : chatMessages.map((chatMessage, index) => (
            // using index here temporarily w/ mock data
            <ChatMessage
              key={`${chatMessage}_${index}`}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
    </div>
  );
};

export default LiveChat;
