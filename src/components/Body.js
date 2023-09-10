import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <article className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </article>
  );
};

export default Body;
