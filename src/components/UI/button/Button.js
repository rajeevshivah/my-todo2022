import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.submit} className="button" onClick={props.onClick}>
        Add Goal
      </button>
    </div>
  );
};

export default Button;
