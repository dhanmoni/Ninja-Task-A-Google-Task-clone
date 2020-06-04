import { v4 as uuid } from "uuid";
export const TasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { task: action.task, id: uuid() }];
  }
};
