import React from "react";

export const ModalFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <footer>{children}</footer>;
};
