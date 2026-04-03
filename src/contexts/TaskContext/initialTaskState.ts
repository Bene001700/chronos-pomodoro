import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedRemaining: "25:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};
