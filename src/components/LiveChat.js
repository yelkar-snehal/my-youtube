import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomInt } from "./../utils/utils";

const LiveChat = () => {
  const disptach = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

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
    }, 1500);
    return () => clearInterval(interval);
  }, [disptach]);

  return (
    <>
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
      <form
        className="mx-4 p-2 my-2 rounded-md border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submit");
          disptach(
            addMessage({
              name: "Jon",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Enter chat message"
          className="px-2 w-96"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-300"> Send ⎆</button>
      </form>
    </>
  );
};

export default LiveChat;
