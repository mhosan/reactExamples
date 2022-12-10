import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Vegetta');
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit =(event) =>{
        event.preventDefault();
        console.log(inputValue);
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
