import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList (props) {
  
  return(
      <ul>
          {props.todoList.map((todo) => <TodoListItem key={todo.id} todo={todo} onRemoveTodo={props.handleRemoveTodo}/>)}
      </ul> 
  );
}

export default TodoList
