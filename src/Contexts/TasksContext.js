import React, { useReducer, createContext } from "react";
import { TasksReducer } from "../Reducers/TasksReducer";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();
const TasksContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TasksReducer, [
    {
      task: "Learn hooks",
      id: uuid(),
      isCompleted: false,
    },
    {
      task: "Learn context",
      id: uuid(),
      isCompleted: false,
    },
  ]);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
