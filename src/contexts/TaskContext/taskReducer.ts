import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsMinutes } from "../../utils/formatSecondsMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;
      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedRemaining: formatSecondsMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
  }
  return state;
}
