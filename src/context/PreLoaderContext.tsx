import { createContext, useEffect, useState, type ReactNode } from "react";
import PreLoader from "../components/layouts/PreLoader";

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

  const { children } = props;

  useEffect(() => {
    document.body.style.overflow = isPreLoading ? "hidden" : "auto";
  }, [isPreLoading]);

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
