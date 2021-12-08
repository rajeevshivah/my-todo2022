import React, { useState } from "react";
import Button from "../UI/button/Button";
import "./input.css";

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
      <div className="fields">
        <label className={`${!isValid ? "label" : ""}`}>Course Goal</label>
        <input
          type="text"
          className={`${!isValid ? "invalid" : "input"}`}
          onChange={(event) => goalInputChangedHandler(event)}
        />
        <div className="button-div">
          <Button type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Input;
