"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ActiveMenuContextType = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(
  undefined,
);

export function ActiveMenuProvider({ children }: { children: ReactNode }) {
  const [activeMenu, setActiveMenu] = useState("");
  return (
    <ActiveMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveMenuContext.Provider>
  );
}

export function useActiveMenu() {
  const context = useContext(ActiveMenuContext);
  if (!context)
    throw new Error("useActiveMenu must be used within ActiveMenuProvider");
  return context;
}
