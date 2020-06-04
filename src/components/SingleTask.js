import React, { useContext, useState } from "react";
import { PanoramaFishEye, Check } from "@material-ui/icons";
import { TasksContext } from "../Contexts/TasksContext";
import { Input } from "@material-ui/core";

const SingleTask = ({ task }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { tasks, dispatch } = useContext(TasksContext);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", id: task.id });
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      setIsFocused(false);
      e.target.blur();
      e.preventDefault();
    }
  };
  return (
    <li key={task.id}>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="toggle_icon"
        onClick={handleComplete}
      >
        {isHovered ? (
          <Check className="done_svg" style={{ fontSize: "2rem" }} />
        ) : (
          <PanoramaFishEye
            className="circle_svg"
            style={{ fontSize: "2rem" }}
          />
        )}
      </span>
      <Input
        value={task.task}
        type="text"
        fullWidth
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleEnter}
        disableUnderline={isFocused ? false : true}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TASK", task: e.target.value, id: task.id })
        }
      />
    </li>
  );
};

export default SingleTask;
