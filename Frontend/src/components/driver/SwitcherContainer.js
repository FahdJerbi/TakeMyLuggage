import React from "react";
import Switcher from "./Switcher";

function SwitcherContainer() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        border: "1px red solid",
        backgroundColor: "beige",
        width: "150px",
      }}
    >
      <Switcher />
    </div>
  );
}

export default SwitcherContainer;
