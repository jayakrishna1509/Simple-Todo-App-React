import { useState } from "react";

const TodoItem = ({ todo, todos, setTodos }) => {
  const handleCompleteCheckbox = (e) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: e.target.checked } : item
      )
    );
  };

  const handleCompleteButton = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleEdit = () => {
    const newText = window.prompt("Edit Item:", todo.text);
    if (newText !== null && newText.trim() !== "") {
      setTodos(
        todos.map((item) =>
          item.id === todo.id ? { ...item, text: newText } : item
        )
      );
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCompleteCheckbox}
        />
        <span className="todo-text" onClick={handleEdit}>
          {todo.text}
        </span>
      </div>
      <div className="todo-actions">
        <button onClick={handleCompleteButton}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
