import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((videos) => setVideos(videos?.items));
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_API);
    return await data.json();
  };

  return (
    <section className="flex flex-wrap">
      {videos?.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </section>
  );
};

export default VideoContainer;
