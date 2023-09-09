import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <article className="grid grid-flow-col">
      <Sidebar />
      <MainContainer />
    </article>
  );
};

export default Body;
