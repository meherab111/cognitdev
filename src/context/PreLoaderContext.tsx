import { createContext, useEffect, useState, type ReactNode } from "react";
import PreLoader from "../components/layouts/PreLoader";

interface IPreLoaderContext {
  isPreLoading: boolean;
  setIsPreLoading: (state: boolean) => void;
}

interface IProps {
  children: ReactNode;
}

const PreLoaderContext = createContext<IPreLoaderContext | undefined>(
  undefined,
);

const PreLoaderProvider = (props: IProps) => {
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

export default PreLoaderProvider;
