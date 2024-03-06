import React from "react";

const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "max-content",
        border: "solid 1px #ccc",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
