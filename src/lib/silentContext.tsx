import React, { ReactNode, useContext, useState } from "react";

interface SilentContextType {
  silent: boolean;
  setSilent: Function;
}
const SilentContext = React.createContext<SilentContextType>({
  silent: false,
  setSilent: () => {},
});

export const useSilent = () => {
  return useContext(SilentContext);
};

export const SilentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [silent, setSilent] = useState<boolean>(false);

  const value: SilentContextType = {
    silent,
    setSilent,
  };

  return (
    <SilentContext.Provider value={value}>{children}</SilentContext.Provider>
  );
};
