import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";
export function Cycles() {
  const { state } = useTaskContext();
  console.log(state, "state do cycles");
  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    work: "foco",
    shortBreak: "descanso curto",
    longBreak: "descanso longo",
  };
  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cyclesDots}>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const nextCycleType = getNextCycleType(nextCycle);
            return (
              <span
                key={`${nextCycleType}_${nextCycle}`}
                className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
}
