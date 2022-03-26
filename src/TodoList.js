import React from "react";

function TodoList() {

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
            {todoList.map((item) => <li key={item.id}> {item.title} </li>)}
        </ul> 
    );
}

export default TodoList