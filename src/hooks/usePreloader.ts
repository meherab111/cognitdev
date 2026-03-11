import { useContext } from "react";
import { PreLoaderContext } from "../context/PreLoaderContext";
import type { IPreLoaderContext } from "../types/context/typesPreloader";

const usePreloader = () => {
  const contextData: IPreLoaderContext | undefined =
    useContext(PreLoaderContext);

  if (contextData === undefined) {
    throw new Error("usePreloader must be used inside PreLoader Provider !!!");
  }

  return contextData;
};

export default usePreloader;
