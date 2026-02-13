"use client";

import { useState, useCallback } from "react";
import { LoaderContext } from "@/components/loader-context";
import { Preloader } from "@/components/preloader";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoaded }}>
      {!isLoaded && <Preloader onComplete={handleComplete} />}
      {children}
    </LoaderContext.Provider>
  );
}
