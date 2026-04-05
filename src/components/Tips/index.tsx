import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

import styles from "./styles.module.css";

export function Tips() {
  const { state } = useTaskContext();
  const tipsForWhemActiveTask = {
    work: <span>Foque por {state.config.work}min.</span>,
    shortBreak: <span>Descanse por {state.config.shortBreak}min.</span>,
    longBreak: <span>Descanse por {state.config.longBreak}min.</span>,
  };
  const tipsForNoActiveTask = {
    work: <span>Próximo ciclo é de {state.config.work}min.</span>,
    shortBreak: <span>Próximo ciclo é de {state.config.shortBreak}min.</span>,
    longBreak: <span>Próximo ciclo é de {state.config.longBreak}min.</span>,
  };

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  return (
    <p className={styles.tips}>
      {!!state.activeTask && tipsForWhemActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </p>
  );
}
