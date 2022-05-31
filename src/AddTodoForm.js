import React, { useState } from "react";
import InputWithLabel from "./InputWithLable";

function AddTodoForm(props) {
    
    const [todoTitle, setTodoTitle] = useState('');

    
    //sets the current state of the input field
    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        console.log(newTodoTitle)
        setTodoTitle(newTodoTitle);
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
            <InputWithLabel titleChange={handleTitleChange} title={todoTitle}>Title</InputWithLabel>
            <button>Submit</button>
        </form>
    );
}

export default AddTodoForm
