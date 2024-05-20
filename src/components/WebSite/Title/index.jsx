import React from "react";

export const Title = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center">
      <h2>{title}</h2>
      <p className="h5 fw-500 text-quaternary">{children}</p>
    </div>
  );
};
