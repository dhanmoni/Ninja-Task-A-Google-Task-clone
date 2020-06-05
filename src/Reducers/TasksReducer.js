import { v4 as uuid } from "uuid";
export const TasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [{ task: action.task, id: uuid(), isCompleted: false }, ...state];
    case "TOGGLE_COMPLETE":
      return state.map((task) =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, task: action.task } : task
      );
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
