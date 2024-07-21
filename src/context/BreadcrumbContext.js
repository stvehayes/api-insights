import React, { createContext, useState } from 'react';

const BreadcrumbContext = createContext();

const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const addBreadcrumb = (breadcrumb) => {
    setBreadcrumbs([...breadcrumbs, breadcrumb]);
  };

  const removeBreadcrumb = () => {
    setBreadcrumbs(breadcrumbs.slice(0, breadcrumbs.length - 1));
  };

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumbs, addBreadcrumb, removeBreadcrumb }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export { BreadcrumbContext, BreadcrumbProvider };
