import { createContext, useState } from "react";

interface MapsContextInterface {
  maps: any;
  setMaps: Function;
}
export const MapsContext = createContext<MapsContextInterface | null>(null);

interface MapsProviderInterface {
  children: JSX.Element;
}
export const MapsProvider = ({ children }: MapsProviderInterface) => {
  const [maps, setMaps] = useState(null);

  return (
    <MapsContext.Provider value={{ maps, setMaps }}>
      {children}
    </MapsContext.Provider>
  );
};
