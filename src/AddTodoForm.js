import React from "react";

function AddTodoForm() {

    return(
        <form>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle"></input>
            <button>Submit</button>
        </form>
    );
}

export default AddTodoForm