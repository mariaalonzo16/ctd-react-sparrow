import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import '../src/App.css'

function useSemiPersistentState() {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));

  useEffect(() => {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])

  

  return[todoList,setTodoList]
}


function App() {

  // const [ newTodo , setNewTodo] = useState('');

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

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
