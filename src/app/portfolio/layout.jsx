import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="px-8 md:px-20 lg:px-40 xl:px-60 flex items-start justify-normal flex-col">
      <h1 className="text-8xl font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
