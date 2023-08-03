import React from "react";
import "./Container.css";

export default function Container({ grid3, center, children }) {
  let classNames = ["Container"];
  if (center) {
    classNames.push("Container--center");
  } else if (grid3) {
    classNames.push("Container--grid3");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
}
