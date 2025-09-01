import { useRecoilValue } from "recoil";
import { filteredTasksSelector } from "../selectors/filteredTasksSelector";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useRecoilValue(filteredTasksSelector);

  return (
    <ul>
      {tasks.length === 0 && <li>Nenhuma tarefa encontrada</li>}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
