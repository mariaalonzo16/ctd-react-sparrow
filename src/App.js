import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';
import '../src/App.css'

function App() {

  //equals an empty string
  const [ newTodo , setNewTodo] = useState('');

  //equals an empty array
  const [todoList, setTodoList] = useState([]);

  let addTodo = ({newTodo}) => {
    setTodoList(...todoList, ...newTodo)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <main>
        <AddTodoForm />
        <TodoList todoList={todoList}/>
      </main>
    </div> 
  );
}

export default App
