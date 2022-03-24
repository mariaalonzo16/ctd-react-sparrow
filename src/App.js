import * as React from 'react';

const todoList =  [
  {
    id: 1,
    title: 'Complete Chemistry Homework',
  },
  {
    id: 2,
    title: 'Respond to unread emails'
  },
  {
    id: 3,
    title: 'Sign up for a coding bootcamp'
  },
];

function App() {
  
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
            {todoList.map((item) => <li key={item.id}> {item.title} </li>)}
        </ul>  
    </div> 
  );
}

export default App
