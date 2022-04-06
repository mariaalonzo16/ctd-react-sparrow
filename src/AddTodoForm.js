import React from "react";

function AddTodoForm(props) {

    const handleAddTodo = (e) => {
        e.preventDefault();

        const todoTitle = e.target.title.value;

        props.onAddTodo(todoTitle)
    
    }
  
    
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" name="title" ></input>
            <button>Submit</button>
        </form>
    );
}

export default AddTodoForm




