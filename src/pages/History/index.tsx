import { HisotoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HisotoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td><Status statusColor="green">Concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td><Status statusColor="green">Concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td><Status statusColor="green">Concluido</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td><Status statusColor="yellow">Em Andamento</Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>ha 2 meses</td>
              <td><Status statusColor="red">Interrompido</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HisotoryContainer>
  )
}
