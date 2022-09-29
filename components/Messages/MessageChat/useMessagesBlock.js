import { useState } from "react";

export const useMessagesBlock = ({ setIsVideoSent }) => {
  const [isPreModalLoading, setIsPreModalLoading] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const goBack = () => {
    setIsVideoSent(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsPreModalLoading(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    setIsPreModalLoading(false);
  };

  return {
    isOpen,
    setIsOpen,
    isPreModalLoading,
    goBack,
    handleOpen,
    isPaymentComplete,
    setIsPaymentComplete,
  };
};
