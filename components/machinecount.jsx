"use client";
import React, { useEffect, useRef } from "react";

function MachineCount({ count }) {
  const spanElement = useRef(null);

  useEffect(() => {
    spanElement.current.classList.remove("icon-animation");
    void spanElement.current.offsetWidth;
    spanElement.current.classList.add("icon-animation");
  }, [count]);

  return (
    <span
      className="eng-text d-flex justify-content-center align-items-center position-absolute z-0 border"
      style={{
        height: "35px",
        width: "35px",
        top: "-5px",
        left: "65%",
        fontWeight: "700",
        background: "rgba(20, 20, 20, 0.5)",
        borderRadius: "50%",
        color: "rgba(150, 238, 246, 1)",
      }}
      ref={spanElement}
    >
      {count}
    </span>
  );
}

export default MachineCount;
