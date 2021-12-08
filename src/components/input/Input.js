import React, { useState } from "react";
import Button from "../UI/button/Button";
import "./input.css";
import styled from "styled-components";

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 10rem;
  background-color: aliceblue;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 10px 10px 8px 10px #13748b;
  margin-top: 5%;
`;

const Input = ({ addGoal }) => {
  const [goal, setGoal] = useState();
  const [isValid, setisValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");
  const goalInputChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    addGoal(enteredValue);
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <FormControl>
        <label className={`${!isValid ? "label" : ""}`}>Course Goal</label>
        <input
          type="text"
          className={`${!isValid ? "invalid" : "input"}`}
          onChange={(event) => goalInputChangedHandler(event)}
        />
        <div className="button-div">
          <Button type="submit">Add Goal</Button>
        </div>
      </FormControl>
    </form>
  );
};

export default Input;
