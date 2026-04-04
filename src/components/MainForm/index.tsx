import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import type React from "react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (taskName.length === 0) {
      alert("O nome da tarefa não pode ser vazio.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({
      type: TaskActionTypes.START_TASK,
      payload: newTask,
    });
  }

  function handleInterruptTask() {
    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className="form">
        <DefaultInput
          id="meuInput"
          labelText="task"
          type="text"
          placeholder="Digite alguma coisa"
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
        <div className="rowForm"></div>
        {state.currentCycle > 0 && (
          <div className="rowForm">
            <Cycles />
          </div>
        )}
        <div className="rowForm">
          {!state.activeTask && (
            <DefaultButton
              aria-label="Iniciar Tarefa"
              type="submit"
              icon={<PlayCircleIcon />}
              color="green"
            />
          )}
          {!!state.activeTask && (
            <DefaultButton
              aria-label="Parar Tarefa"
              type="button"
              icon={<StopCircleIcon />}
              color="red"
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </>
  );
}
