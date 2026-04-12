import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 1,
    shortBreak: 1,
    longBreak: 1,
  },
};
