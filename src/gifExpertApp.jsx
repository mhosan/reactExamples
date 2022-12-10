
import { useState } from 'react';
import { AddCategory } from './components/addCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['saludo uno', 'saludo dos', 'saludo tres']);
    const onAddCategory =(() =>{
        setCategories([...categories, 'nuevo'])
    })

    return (
        <>
            <h1>Hola mundo desde gisExpertApp</h1>
            <AddCategory />
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
        }
            </ol>
        </>
    )
}
