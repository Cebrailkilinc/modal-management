import { useState } from "react";

interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};
