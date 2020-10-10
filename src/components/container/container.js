import React from 'react';
import Nav from 'components/nav/nav';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Nav />
      {children}
    </div>
  );
};

export default Container;
