function InputWithLabel (props) {
    console.log(props.todoTitle)
    return (
        <>
        <label htmlFor="todoTitle">{props.label} </label>
            <input 
                id="todoTitle" 
                name="title" 
                value={props.todoTitle} 
                onChange={props.handleTitleChange}
            >
            </input>
        </>
    )
}

export default InputWithLabel