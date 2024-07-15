import React, { useState } from "react";

const Info = ({ title }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <i
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        class="fa-solid fa-circle-info me-3"
      ></i>
      {hover && <span className="position-absolute info_box">{title}</span>}
    </div>
  );
};

export default Info;
