import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary text-white font-bold text-xl bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default PrimaryButton;
