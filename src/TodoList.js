import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList (props) {

  // const todoList = props.todoList;
  

  return(
      <ul>
          {props.todoList.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul> 
  );
}

export default TodoList