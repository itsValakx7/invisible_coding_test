"use client";
import { useState } from "react";
import "./styles/style.css";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    if (editIndex === null) {
      setTodos([...todos, newTodo]);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTodo;
      setTodos(updatedTodos);
      setEditIndex(null);
    }

    setNewTodo("");
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="header">Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>
          {editIndex === null ? "Add" : "Update"}
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo}</span>
            <div className="button-group">
              <button className="edit-btn" onClick={() => editTodo(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
