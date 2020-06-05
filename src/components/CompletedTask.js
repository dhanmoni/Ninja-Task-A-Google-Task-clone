import React, { useContext, useState } from "react";
import { Check, DeleteOutlineOutlined } from "@material-ui/icons";
import { TasksContext } from "../Contexts/TasksContext";
import { Input } from "@material-ui/core";

const CompletedTask = ({ task, dispatch }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleComplete = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      dispatch({ type: "TOGGLE_COMPLETE", id: task.id });
    }, 300);
  };

  const handleRemove = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      dispatch({ type: "REMOVE_TASK", id: task.id });
    }, 300);
  };
  return (
    <li key={task.id} className={isVisible ? "visible" : "invisible"}>
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
      <span className="delete_task" onClick={handleRemove}>
        <DeleteOutlineOutlined fontSize="large" />
      </span>
    </li>
  );
};

export default CompletedTask;
