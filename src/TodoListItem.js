import React from "react";

function TodoListItem(props) {
  
    const testRun = () => {
        console.log('fruit')

        const remove = props.onRemoveTodo(props.todo.id)
        console.log(remove)
    }

    const remove = () => props.onRemoveTodo(props.todo.id)

    return(
        <>
            <li> {props.todo.title} </li>
            <button 
                type="button" 
                // onClick={props.onRemoveTodo(props.todo.id)}
                // onClick={testRun}
                onClick={remove}
            >
                Remove
            </button>
        </>
    )
}

export default TodoListItem