import React, { useState } from 'react';
import { TodoForm, TodoItem } from '../pages/Todo.jsx';


const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  
  // Add a new Todo
  const addTodo = (todoText) => {
    setTodos([
      ...todos,
      { id: Date.now(), text: todoText, completed: false }
    ]);
  };

  // Toggle Todo completion
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Todo message
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#c586a5] to-[#6a9bfa] dark:from-[#2c3e50] dark:to-[#34495e] text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>

      {/* Todo Form */}
      <TodoForm addTodo={addTodo} />

      {/* Todo List */}
      <div className="mt-6 space-y-4 w-full max-w-md">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
