import React, { createContext, useState } from 'react';

const PeriodContext = createContext();

const PeriodProvider = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(1440);

  return (
    <PeriodContext.Provider value={{ selectedPeriod, setSelectedPeriod }}>
      {children}
    </PeriodContext.Provider>
  );
};

export { PeriodContext, PeriodProvider };
