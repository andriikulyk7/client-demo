import { useState } from "react";
import { format } from "date-fns";
import { useFilePicker } from "use-file-picker";

export const useVideoBlock = ({ setNowDate }) => {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
  });

  const [isLoading, setIsLoading] = useState();

  const videoButtonCLick = () => {
    setIsLoading((prevState) => !prevState);
    openFileSelector();
    setNowDate(format(new Date(), "EEE, HH:mm "));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return {
    videoButtonCLick,
    filesContent,
    loading,
    isLoading,
  };
};
