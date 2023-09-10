import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const disptach = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  useEffect(() => {
    disptach(closeMenu());
  }, [disptach]);

  return (
    <div className="col-span-8 px-5 w-3/4">
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
  );
};

export default WatchPage;
