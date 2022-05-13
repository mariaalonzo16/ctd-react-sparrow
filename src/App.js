import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import '../src/App.css'

function useSemiPersistentState() {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  console.log(todoList)

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
    console.log(newTodo)
  }

  const handleRemoveTodo = (id) => {
    const removeTodo = todoList.filter((item) => item.id !== id)
    
    setTodoList(removeTodo)
  }
  console.log(handleRemoveTodo)
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
