import React, { useState, useContext } from "react";
import "./Styles/Footer.css";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import CompletedTask from "./CompletedTask";
import { TasksContext } from "../Contexts/TasksContext";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const { tasks, dispatch } = useContext(TasksContext);
  let completed = 0;
  tasks.map((task) => {
    if (task.isCompleted) {
      completed = completed + 1;
    }
  });
  return (
    <div className={showFooter ? "expanded-footer" : "footer"}>
      <div className="footer-head" onClick={() => setShowFooter(!showFooter)}>
        <span className="completed">Completed ({completed})</span>
        <span className="dropdown-icon">
          {showFooter ? (
            <KeyboardArrowDown fontSize="large" />
          ) : (
            <KeyboardArrowUp fontSize="large" />
          )}
        </span>
      </div>
      <div className="completed-tasks-container">
        <ul className="completed-tasks">
          {showFooter &&
            tasks.map((task) => {
              if (task.isCompleted) {
                return (
                  <CompletedTask
                    task={task}
                    key={task.id}
                    dispatch={dispatch}
                  />
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
