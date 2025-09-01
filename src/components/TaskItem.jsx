import { useSetRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";

export default function TaskItem({ task }) {
  const setTasks = useSetRecoilState(tasksAtom);

  const toggleTask = () => {
    setTasks(oldTasks =>
      oldTasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = () => {
    setTasks(oldTasks => oldTasks.filter(t => t.id !== task.id));
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={toggleTask}>
        {task.completed ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={removeTask}>Remover</button>
    </li>
  );
}
