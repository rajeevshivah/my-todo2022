import React from "react";
import GoalItem from "../goalItem/GoalItem";
import "./GoalItemList.css";

const GoalItemList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((item) => {
        return (
          <GoalItem key={item.id} id={item.id} deleteGoal={props.deleteGoal}>
            {item.text}
          </GoalItem>
        );
      })}
    </ul>
  );
};

export default GoalItemList;
