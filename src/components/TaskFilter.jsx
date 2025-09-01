import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

export default function TaskFilter() {
  const [filter, setFilter] = useRecoilState(filterAtom);

  return (
    <div className="filters">
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        Todas
      </button>
      <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
        Concluídas
      </button>
      <button onClick={() => setFilter("pending")} disabled={filter === "pending"}>
        Pendentes
      </button>
    </div>
  );
}
