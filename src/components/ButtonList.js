import React from "react";
import Button from "./Button";

const names = ["All", "News", "Food", "Tennis", "Art", "Music"];

const ButtonList = () => {
  return (
    <section className="flex">
      {names.map((name) => (
        <Button name={name} key={name} />
      ))}
    </section>
  );
};

export default ButtonList;
