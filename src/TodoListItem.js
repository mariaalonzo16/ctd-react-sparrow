import React from "react";

function TodoListItem(props) {
    
    return(
        <>
        <li> {props.todo.title} </li>
        <button type="button">Remove</button>
        </>
    )
}

export default TodoListItem