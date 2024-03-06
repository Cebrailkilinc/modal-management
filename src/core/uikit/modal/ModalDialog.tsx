import React, { ReactNode } from "react";
import { ModalOverlay } from "./ModalOverlay";
import { ModalContent } from "./ModalContent";

interface ModalDialogProps {
  onClose: () => void;
  children: ReactNode;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({ onClose, children }) => {
  return (
    <>
      <ModalOverlay onClose={onClose} />
      <ModalContent>{children}</ModalContent>
    </>
  );
};