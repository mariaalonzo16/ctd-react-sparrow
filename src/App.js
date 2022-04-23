import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import '../src/App.css'

function App() {

  //equals an empty string
  const [ newTodo , setNewTodo] = useState('');

  //equals an empty array
  // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));
  const [todoList, setTodoList] = useState([]);

  let addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])
  

  return (
    <div>
      <h1>Todo List</h1>
      <main>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
      </main>
    </div> 
  );
}

export default App
