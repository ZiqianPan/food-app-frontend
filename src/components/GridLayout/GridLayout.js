import React from "react";
import "./GridLayout.css";

export default function GridLayout({ children }) {
  let classNames = ["GridLayout"];

  return <div className={classNames.join(" ")}>{children}</div>;
}
