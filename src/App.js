import "./App.css";
import Input from "./components/input/Input";
import React, { useState } from "react";
import GoalItemList from "./components/GoalItemList/GoalItemList";

function App() {
  const [items, setItems] = useState([
    { text: "Do all homeworks!", id: "g1" },
    { text: "Read 5 pages.", id: "g2" },
  ]);
  const addGoal = (goalToAdd) => {
    setItems((prevState) => {
      const updatedItems = [...items];
      updatedItems.unshift({ text: goalToAdd, id: Math.random().toString() });
      return updatedItems;
    });
  };
  const deleteGoal = (id) => {
    setItems((prevState) => {
      const updatedItems = prevState.filter((item) => item.id !== id);
      return updatedItems;
    });
  };
  return (
    <div className="wrapper-class">
      <Input addGoal={addGoal} />
      <GoalItemList goals={items} deleteGoal={deleteGoal} />
    </div>
  );
}

export default App;

//WAP to create a 2-d array of size m*n and the print the fliped array

/*

2  4  5   6
7  2  1   0
8  3  1   0

8  7  2
3  2  4 
1  1  5
0  0  6


*/
