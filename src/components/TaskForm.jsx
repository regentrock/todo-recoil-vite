import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";

export default function TaskForm() {
  const [input, setInput] = useState("");
  const setTasks = useSetRecoilState(tasksAtom);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks(oldTasks => [
      ...oldTasks,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
