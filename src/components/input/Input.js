import React, { useState } from "react";
import Button from "../UI/button/Button";
import "./input.css";

const Input = ({ addGoal }) => {
  const [goal, setGoal] = useState();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    addGoal(goal);
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="fields">
        <label>Course Goal</label>
        <input
          type="text"
          className="input"
          onChange={(event) => setGoal(event.target.value)}
        />
        <div className="button-div">
          <Button type="submit" />
        </div>
      </div>
    </form>
  );
};

export default Input;
