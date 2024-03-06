import React from "react";

export const ModalBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};
