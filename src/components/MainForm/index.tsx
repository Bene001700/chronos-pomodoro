import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <>
      <div className="rowForm">
        <form className="form">
          <DefaultInput
            id="meuInput"
            labelText="task"
            type="text"
            placeholder="Digite alguma coisa"
          />
        </form>
      </div>
      <div className="rowForm">
        <Cycles />
      </div>
      <div className="rowForm">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </>
  );
}
