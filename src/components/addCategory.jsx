import { useState } from "react";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
