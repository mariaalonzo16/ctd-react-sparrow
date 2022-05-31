import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import '../src/App.css'

function App() {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

  useEffect(() => {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
    console.log(newTodo)
  }

  const handleRemoveTodo = (id) => {
    console.log(id)
      const removeTodo = todoList.filter((todo) => todo.id !== id)

      setTodoList(removeTodo)
  }
  return (
    <>
      <h1>Todo List</h1>
      <main>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo}/>
      </main>
    </> 
  );
}

export default App
