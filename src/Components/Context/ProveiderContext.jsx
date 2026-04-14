import { createContext, useState } from "react";

const contextProveider = createContext();

const ProveiderContext = ({ children }) => {
//   const [click, setClick] = useState([]);

  const data = {
    
  };

  return (
    <contextProveider.Provider value={data}>
      {children}
    </contextProveider.Provider>
  );
};

export default ProveiderContext;
