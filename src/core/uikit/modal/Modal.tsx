import React, { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalDialog } from "./ModalDialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalDialog onClose={onClose}>
          <div>{children}</div>
        </ModalDialog>
      )}
    </AnimatePresence>
  );
};
