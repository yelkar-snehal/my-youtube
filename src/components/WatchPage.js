import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const disptach = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    disptach(closeMenu());
  }, [disptach]);

  return (
    <div className=" grid grid-cols-[2fr_1fr]">
      <div className="mx-2 px-2">
        <iframe
          width="100%"
          height="705"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
