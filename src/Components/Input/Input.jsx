import { useState } from "react";

function Input(props) {

    const {addTodo} = props;

    const [userInput, setUserInput] = useState('')

    function handleChange(event) {
        setUserInput(event.target.value)
    }
    function handleClick() {
        addTodo(userInput)
        setUserInput('');
    }
    
    return (
        <div>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button type="submit" onClick={handleClick}>Valider</button>
        </div>
    )
}

export default Input;