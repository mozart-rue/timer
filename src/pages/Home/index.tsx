import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCoutdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto" />

          <datalist id="task-suggestions">
            <option value='projeto 1' />
            <option value='projeto 2' />
            <option value='projeto 3' />
            <option value='banana' />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" step={5} min={5} max={60} placeholder="00" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCoutdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCoutdownButton>
      </form>
    </HomeContainer>
  )
}
