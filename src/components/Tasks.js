import React, { useContext } from "react";
import "./Styles/Tasks.css";
import { Add } from "@material-ui/icons";
import { TasksContext } from "../Contexts/TasksContext";
import SingleTask from "./SingleTask";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TasksContext);
  return (
    <div className="tasks-container">
      <div
        className="add-task-button"
        onClick={() => {
          dispatch({ type: "ADD_TASK", task: "" });
          setTimeout(() => {
            let ul = document.getElementsByClassName("task-list");
            console.log(ul);
            let child = ul[0].childNodes[0];
            console.log(child);
            child.childNodes[1].childNodes[0].focus();
          }, 500);
          // taskInput.current.focus();
        }}
      >
        <span>
          <Add />
        </span>
        Add a task
      </div>
      <ul className="task-list">
        {tasks.map((task) => {
          return <SingleTask task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
