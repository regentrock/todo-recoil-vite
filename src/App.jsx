import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import "./index.css"; // importar estilos

function App() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

export default App;
