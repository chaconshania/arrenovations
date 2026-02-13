"use client";

import { createContext, useContext } from "react";

export const LoaderContext = createContext({ isLoaded: false });

export function useLoader() {
  return useContext(LoaderContext);
}
