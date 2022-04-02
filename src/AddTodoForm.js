import React from "react";

function AddTodoForm() {

    const handleAddTodo = (e) => {
        e.preventDefault();

        const todoTitle = e.target.value;

        console.log(todoTitle); 
      
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




