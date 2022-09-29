import { useState } from "react";

export const useMessagesModal = ({ setIsOpen, setIsPaymentComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAccess, setIsAccess] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAccess(true);
    }, 3000);
    setTimeout(() => {
      setIsOpen(false);
      setIsPaymentComplete(true);
    }, 4500);
  };

  const handleclose = () => {
    setIsOpen(false);
  };

  return {
    isLoading,
    isAccess,
    style,
    handleLoading,
    handleclose,
  };
};
