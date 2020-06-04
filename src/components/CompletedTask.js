import React, { useContext, useState } from "react";
import { Check } from "@material-ui/icons";
import { TasksContext } from "../Contexts/TasksContext";
import { Input } from "@material-ui/core";

const CompletedTask = ({ task, dispatch }) => {
  const handleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", id: task.id });
  };

  return (
    <li key={task.id}>
      <span className="toggle_icon" onClick={handleComplete}>
        <Check className="done_svg" style={{ fontSize: "2rem" }} />
      </span>
      <Input
        value={task.task}
        type="text"
        fullWidth
        readOnly
        disableUnderline
        style={{ textDecoration: "line-through" }}
      />
    </li>
  );
};

export default CompletedTask;
