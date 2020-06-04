import React, { useContext } from "react";
import "./Styles/Tasks.css";
import { Add } from "@material-ui/icons";
import { TasksContext } from "../Contexts/TasksContext";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TasksContext);
  return (
    <div className="tasks-container">
      <div className="add-task-button">
        <span>
          <Add />
        </span>
        Add a task
      </div>
      <ul className="task-list">
        {tasks.map((task) => {
          return <li key={task.id}>{task.task}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
