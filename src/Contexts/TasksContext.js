import React, { useReducer, createContext, useEffect } from "react";
import { TasksReducer } from "../Reducers/TasksReducer";

export const TasksContext = createContext();
const TasksContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TasksReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
