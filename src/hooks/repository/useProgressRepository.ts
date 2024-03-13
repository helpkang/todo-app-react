import { useState } from "react";

export function useProgressRepository() {
  const [progress, setProgress] = useState<{
    isPending: boolean;
    error: Error | null;
  }>({
    isPending: false,
    error: null,
  });
  return {
    progress,
    setProgress,
  };
}
