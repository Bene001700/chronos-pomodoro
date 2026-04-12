import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();
    worker.onmessage((e) => {
      const secondsRemaining = e.data;
      if (secondsRemaining <= 0) {
        if (playBeepRef.current) playBeepRef.current();
        dispatch({
          type: TaskActionTypes.COMPLETED_TASK,
        });
        worker.terminate();
      } else {
        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: secondsRemaining },
        });
      }
    });
    if (!state.activeTask) worker.terminate();

    worker.postMessage(state);
  }, [state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current == null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
