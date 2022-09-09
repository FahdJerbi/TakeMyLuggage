import React from "react";
import Switcher from "./Switcher";

function SwitcherContainer() {
  return (
    <div
      style={{
        position: "absolute",
        marginTop: "90px",
        marginLeft: "65%",
        paddingLeft: "10px",
        zIndex: 100,
        border: "1px grey solid",
        backgroundColor: "beige",
        width: "150px",
      }}
    >
      <Switcher />
    </div>
  );
}

export default SwitcherContainer;
