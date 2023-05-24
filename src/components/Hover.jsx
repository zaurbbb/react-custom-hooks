import React, { useRef } from "react";

import { useHover } from "../hooks/useHover";

import Title from "../ui/Title";

function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);

  const styles = {
    width: 300,
    height: 300,
    backgroundColor: !isHovering ? "red" : "yellow",
  };

  return (
    <div>
      <Title text="useHover" />
      <div
        ref={ref}
        style={styles}
      >

        Hover over here!!!
      </div>
    </div>
  );
}

export default Hover;
