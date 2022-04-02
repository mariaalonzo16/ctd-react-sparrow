import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {

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

  return(
      <ul>
          {todoList.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul> 
  );
}

export default TodoList