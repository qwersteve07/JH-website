import React from 'react';

const Title = ({ children }) => {
  return (
    <>
      <h2 className="text-3xl font-bold my-5">{children}</h2>
      <hr />
    </>
  );
};

export default Title;
