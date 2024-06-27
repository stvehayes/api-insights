import React, { createContext, useState } from 'react';

const IncrementContext = createContext();

const IncrementProvider = ({ children }) => {
  const [selectedIncrement, setSelectedIncrement] = useState(60);

  return (
    <IncrementContext.Provider
      value={{ selectedIncrement, setSelectedIncrement }}
    >
      {children}
    </IncrementContext.Provider>
  );
};

export { IncrementContext, IncrementProvider };
