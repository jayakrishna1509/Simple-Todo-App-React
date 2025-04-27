import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Home = ({ todos, setTodos }) => {
  const clearAllTasks = () => {
    if (todos.length > 0 && window.confirm("Are you sure clear all tasks?")) {
      setTodos([]);
    }
  };

  return (
    <div className="home">
      <h2>My Tasks</h2>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <button
        onClick={clearAllTasks}
        className="clear-all-btn"
        disabled={todos.length === 0}
      >
        Clear All Tasks
      </button>
    </div>
  );
};

export default Home;
