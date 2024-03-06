import React from "react";

interface ModalCloseButtonProps {
  onClick: () => void;
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onClick,
}) => {
  return <button style={{
    position: "absolute",
    right: 16,
    top: 16
  }} onClick={onClick}>Close</button>;
};
