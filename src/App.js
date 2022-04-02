import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo]= useState()

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <p>{newTodo}</p>
      <TodoList /> 
    </div> 
  );
}

export default App
