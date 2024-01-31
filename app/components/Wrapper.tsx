'use client';

import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: ContainerProps) => {
  return (
    <div
      className="
      max-w-[1440px]
    mx-auto
    px-4
    sm:px-8
    md:px-10"
    >
      {children}
    </div>
  );
};

export default Wrapper;
