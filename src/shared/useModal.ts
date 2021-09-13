import { useState } from "react";

interface InitialValues {
  initialOpen?: boolean;
}

const useModal = (props?: InitialValues) => {
  const [open, setOpen] = useState(props?.initialOpen || false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return { open, onOpen, onClose, toggleOpen };
};

export default useModal;
