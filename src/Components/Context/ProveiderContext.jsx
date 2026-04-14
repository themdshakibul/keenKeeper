"use client";

import { createContext, useContext, useState } from "react";

const ProveiderContext = createContext();

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState([]);

  const interaction = (type, friendDetails) => {
    const now = new Date();

    const newData = {
      id: Date.now(),
      type,
      friendDetails,
      friendName: friendDetails.name,
      date: new Date().toDateString(),
      time: now.toLocaleTimeString(),
    };

    setClicks((prev) => [newData, ...prev]);
  };

  const value = {
    clicks,
    interaction,
  };

  return (
    <ProveiderContext.Provider value={value}>
      {children}
    </ProveiderContext.Provider>
  );
};

export const useHooks = () => {
  return useContext(ProveiderContext);
};
