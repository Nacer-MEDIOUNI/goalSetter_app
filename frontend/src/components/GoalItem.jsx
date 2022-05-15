import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div style={{ textAlign: "initial", padding: "30px" }}>
        <p>{goal.text}</p>
      </div>
      <div
        style={{
          paddingLeft: "60%",
          paddingTop: "20px",
          fontSize: "12px",
          fontWeight: "lighter",
        }}
      >
        {new Date(goal.createdAt).toDateString("en-US")}
      </div>
      <button className="close" onClick={() => dispatch(deleteGoal(goal._id))}>
        X
      </button>
    </div>
  );
};
export default GoalItem;
