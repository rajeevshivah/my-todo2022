import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 7rem;
  height: 2rem;
  font-weight: bold;
  background-color: crimson;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: aqua;
    color: black;
  }
`;
/* import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.submit} className="button" onClick={props.onClick}>
        Add Goal
      </button>
    </div>
  );
};
*/
export default Button;
