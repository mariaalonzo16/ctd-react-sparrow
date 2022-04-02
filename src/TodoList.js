import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {


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
          {todoList.map((item) => <TodoListItem key={props.title}/>)}
      </ul> 
  );
}

export default TodoList