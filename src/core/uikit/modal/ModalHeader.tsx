import React from "react";

export const ModalHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h2>{children}</h2>;
};
