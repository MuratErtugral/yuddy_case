import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      {children}
    </div>
  );
};

export default Layout;
