import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCoutdownButton, TaskInput } from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisable = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto" {...register('task')} />

          <datalist id="task-suggestions">
            <option value='projeto 1' />
            <option value='projeto 2' />
            <option value='projeto 3' />
            <option value='banana' />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" step={5} min={5} max={60} placeholder="00"  {...register('minutesAmount', {valueAsNumber: true})}/>

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCoutdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCoutdownButton>
      </form>
    </HomeContainer>
  )
}
