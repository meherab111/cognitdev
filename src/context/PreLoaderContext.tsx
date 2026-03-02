import { createContext, useEffect, useState, type ReactNode } from "react";
import PreLoader from "../components/layouts/PreLoader";
import { useLenis } from "lenis/react";
import type Lenis from "lenis";

interface IProps {
  children: ReactNode;
}

interface IPreLoaderContext {
  isPreLoading: boolean;
  setIsPreLoading: (state: boolean) => void;
}

export const PreLoaderContext = createContext<IPreLoaderContext | undefined>(
  undefined,
);

export const PreLoaderProvider = (props: IProps) => {
  const [isPreLoading, setIsPreLoading] = useState<boolean>(true);

  const lenis: Lenis | undefined = useLenis();

  const { children } = props;

  useEffect(() => {
    if (isPreLoading) {
    document.body.style.overflow = "hidden";
    lenis?.stop();
  } else {
    document.body.style.overflow = "auto";
    lenis?.start();
  }
  }, [isPreLoading, lenis]);

  return (
    <PreLoaderContext.Provider value={{ isPreLoading, setIsPreLoading }}>
      {isPreLoading && (
        <PreLoader
          animationDone={() => {
            setIsPreLoading(false);
          }}
        />
      )}
      {children}
    </PreLoaderContext.Provider>
  );
};
