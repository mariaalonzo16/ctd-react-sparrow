import { useEffect, useRef } from "react"

function InputWithLabel (props) {
    
    const inputRef = useRef();

    useEffect(() => {
       inputRef.current.focus();
        
      }, []);
    return (
        <>
        <label htmlFor="todoTitle">{props.children} </label>
            <input 
                id="todoTitle" 
                name="title" 
                value={props.title} 
                onChange={props.titleChange}
                ref={inputRef}
            >
            </input>
        </>
    )
}

export default InputWithLabel