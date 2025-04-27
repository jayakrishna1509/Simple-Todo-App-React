import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) : (
        <p>No Tasks Found. Add New Task above!</p>
      )}
    </div>
  );
};

export default TodoList;
