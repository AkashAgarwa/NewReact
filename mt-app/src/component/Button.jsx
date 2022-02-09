import React from "react";
import './Button.css'

const Button = ({ label, inverse, disabled, onClick }) => {
  return (
    <button   className={`button${inverse ? " button--inverse" : ""}`}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
