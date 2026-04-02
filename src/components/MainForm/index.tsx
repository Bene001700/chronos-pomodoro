import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import type React from "react";

export function MainForm() {
  function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Criando nova tarefa...");
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask} className="form">
        <DefaultInput
          id="meuInput"
          labelText="task"
          type="text"
          placeholder="Digite alguma coisa"
        />
        <div className="rowForm"></div>
        <div className="rowForm">
          <Cycles />
        </div>
        <div className="rowForm">
          <DefaultButton
            type="submit"
            icon={<PlayCircleIcon />}
            color="green"
          />
        </div>
      </form>
    </>
  );
}
