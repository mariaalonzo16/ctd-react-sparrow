import React, { useState } from "react";

function AddTodoForm(props) {

    

    const [todoTitle, setTodoTitle] = useState('')
    
    //sets the current state of the input field
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;

        setTodoTitle(newTodoTitle);
        console.log(newTodoTitle)
        
    }

    //After the form gets submitted we set our form to an empty array
    const handleAddTodo = (e) => {
        e.preventDefault();
        setTodoTitle('');

       props.onAddTodo({
           title: todoTitle,
           id: Date.now()
       });
        
    }
  
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input 
                id="todoTitle" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange}
            >
            </input>
            <button>Submit</button>
        </form>
    );
}

export default AddTodoForm




