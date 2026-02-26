import { useContext } from "react";
import { PreLoaderContext } from "../context/PreLoaderContext";
import type { IPreLoaderContext } from "../types/context/typesPreLoader";

const usePreLoader = () => {
  const contextData: IPreLoaderContext | undefined = useContext<
    IPreLoaderContext | undefined
  >(PreLoaderContext);

  if (contextData === undefined)
    throw new Error("usePreLoader must be used within PreLoaderProvider");
  return contextData;
};

export default usePreLoader;
