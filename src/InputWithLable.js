import { useRef } from "react"

function InputWithLabel (props) {
    
    // const inputRef = useRef();
    return (
        <>
        <label htmlFor="todoTitle">{props.children} </label>
            <input 
                id="todoTitle" 
                name="title" 
                value={props.title} 
                onChange={props.titleChange}
                autoFocus
            >
            </input>
        </>
    )
}

export default InputWithLabel