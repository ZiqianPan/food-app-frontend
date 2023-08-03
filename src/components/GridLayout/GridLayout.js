import React from "react";
import "./GridLayout.css";

export default function GridLayout({ grid3, children }) {
  let classNames = ["GridLayout"];
  if (grid3) {
    classNames.push("GridLayout--grid3");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
}
