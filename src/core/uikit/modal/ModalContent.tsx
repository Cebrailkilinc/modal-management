import React, { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        minWidth: 400,
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 20,
      }}
    >
      {children}
    </div>
  );
};
