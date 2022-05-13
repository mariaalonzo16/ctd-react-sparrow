import React from "react";

function TodoListItem(props) {
    console.log(props)
    
    return(
        <>
        <li> {props.todo.title} </li>
        <button type="button" onClick={() => props.onRemoveTodo}>Remove</button>
        </>
    )
}

export default TodoListItem