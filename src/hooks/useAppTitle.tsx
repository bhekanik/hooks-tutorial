import { useEffect } from "react";

export const useAppTitle = (
  title: string,
  setTitle: (newTitle: string) => void
) => {
  useEffect(() => {
    setTitle(title);
  }, [title]);
};
